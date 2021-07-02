import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  UpdateFormGroup: FormGroup;
  BASEURL: string = 'http://127.0.0.1:5000/'

  constructor( private http: HttpClient, private datepipe: DatePipe, private router: Router) {
    this.UpdateFormGroup = new FormGroup(
      {
        username: new FormControl('name', Validators.required),
        email: new FormControl('email', Validators.required),
        gender: new FormControl('gender', Validators.required),
        date: new FormControl('date', Validators.required),
      }
    );
  }

  ngOnInit(): void {
  }

  OnSubmitUpdateForm() {
    var dob = this.datepipe.transform(this.UpdateFormGroup.value['date'], 'yyyy-MM-dd')?.toString()
    var body =
    {
      "username": this.UpdateFormGroup.value['username'],
      "email": this.UpdateFormGroup.value['email'],
      "gender": this.UpdateFormGroup.value['gender'],
      "dob": dob
    }

    // console.log(body)
    this.http.put(this.BASEURL + '/api/updatedata', body).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/home'])
      },
      error => {
        console.log(error)
      }
    )

  }

}
