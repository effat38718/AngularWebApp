import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserEditComponent } from './user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  BASEURL: string = 'http://127.0.0.1:5000/'
  dataSource: any;
  displayedColumns: string[] = ['username', 'email', 'gender', 'dob'];

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.viewUsersList();
  }

  viewUsersList() {
    this.http.get(this.BASEURL + '/api/getUserList').subscribe(
      res => {
        console.log(res)
        this.dataSource = res;
      },
      error => {
        console.log("Invalid request")
      }
    )

  }

  openEditDataPopUp() {
    // const dialogconfig = new MatDialogConfig();
    // dialogconfig.disableClose = false;
    // dialogconfig.autoFocus = true;
    // dialogconfig.width = "50%";
    const dialogRef = this.dialog.open(UserEditComponent, { height: '380px', width: '300px' });
  }

}
