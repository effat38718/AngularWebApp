import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loginFormGroup: FormGroup;
  x: number;
  hide = true;
  BASEURL: string = 'http://127.0.0.1:5000/'


  constructor(private http: HttpClient, private router: Router) {
    this.loginFormGroup = new FormGroup(
      {
        password: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
      }
    );
    this.x = 0;
  }

  ngOnInit(): void {
  }

  onSubmitLoginForm() {

    if (this.loginFormGroup.value.email == "jahan.effat2017@gmail.com") {
      if (this.loginFormGroup.value.password == "1234") {


        this.http.get(this.BASEURL + '/api/getVotka').subscribe(
          res => {
            console.log("login successful!")
            this.router.navigate(['/home'])
          },
          error => {
            console.log(error)
          }
        )

      }


      console.log(this.loginFormGroup.value)
    }
    else
      console.log("MURI KHA!");
  }

}
