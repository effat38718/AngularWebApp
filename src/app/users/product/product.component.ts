import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  BASEURL: string = 'http://127.0.0.1:5000/'
  dataSource: any;
  displayedColumns: string[] = ['productname', 'quantity', 'price', 'description'];

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.viewProducts();
  }

  openAddProductPopUp() {
    const dialogRef = this.dialog.open(AddProductComponent, { height: '800px', width: '1000px' });
  }

  viewProducts() {
    this.http.get(this.BASEURL + '/api/getProductList').subscribe(
      res => {
        console.log(res)
        this.dataSource = res;
      },
      error => {
        console.log("Invalid request")
      }
    )
  }

}
