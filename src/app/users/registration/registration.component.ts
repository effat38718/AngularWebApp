import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  SignupFormGroup: FormGroup;

  hide = true;
  BASEURL: string = 'http://127.0.0.1:5000/'


  constructor(private http: HttpClient, private datepipe: DatePipe, private router: Router) {
    this.SignupFormGroup = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
      }
    );

  }

  ngOnInit(): void {


  }


  OnSubmitSignupForm() {

    var dob = this.datepipe.transform(this.SignupFormGroup.value['date'], 'yyyy-MM-dd')?.toString()
    var body =
    {
      "username": this.SignupFormGroup.value['username'],
      "email": this.SignupFormGroup.value['email'],
      "password": this.SignupFormGroup.value['password'],
      "gender": this.SignupFormGroup.value['gender'],
      "dob": dob
    }

    //console.log(body)
    this.http.post(this.BASEURL + '/api/postdata', body).subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }
}
