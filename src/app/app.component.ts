import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './users/product/add-product/add-product.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  BASEURL: string = 'http://127.0.0.1:5000/'
  title = 'Angular7';

  constructor(private dialog: MatDialog) {

  }

  OnClickMenuIcon() {

    console.log("MENU CLICKED");
  }

  OnClickAddIcon() {
    const dialogRef = this.dialog.open(AddProductComponent, { height: '420px', width: '300px' });
    console.log("ADD CLICKED");
  }

  OnClickCartIcon() {
    console.log("JHURI CLICKED");
  }

}
