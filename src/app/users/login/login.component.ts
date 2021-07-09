import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  x: number;
  hide = true;
  BASEURL: string = 'http://127.0.0.1:5000/'
  isValidated: boolean;


  constructor(private http: HttpClient, private router: Router) {
    this.loginFormGroup = new FormGroup(
      {
        password: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
      }
    );
    this.x = 0;
    this.isValidated = false;
  }

  ngOnInit(): void {
  }

  onSubmitLoginForm() {
    var inputEmail = this.loginFormGroup.value.email
    var inputPass = this.loginFormGroup.value.password

    this.http.get(this.BASEURL + '/api/getVotka').subscribe(
      res => {
        this.isValidated = this.validateUser(res, inputEmail, inputPass);
        if (this.isValidated) {
          this.router.navigate(['/dashboard']);
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  validateUser(data: any, email: any, password: any) {
    var result = false;
    data.forEach((element: any) => {
      if (element.email == email && element.password == password) {
        result = true;

      }
    });
    return result
  }

}
