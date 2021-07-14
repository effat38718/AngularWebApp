import { Component, OnInit } from '@angular/core';
//import { ImageService } from './image.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductComponent } from '../product.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  ProductFormGroup: FormGroup;
  isValidated: boolean;
  x: number;
  BASEURL: string = 'http://127.0.0.1:5000/'

  constructor(private http: HttpClient) {
    this.ProductFormGroup = new FormGroup(
      {
        pname: new FormControl('', Validators.required),
        quantity: new FormControl(0, Validators.required),
        price: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
      }
    );
    this.x = 0;
    this.isValidated = false;
  }

  ngOnInit(): void {
  }

  onSubmitProductForm() {
    var body =
    {
      "productname": this.ProductFormGroup.value['pname'],
      "quantity": this.ProductFormGroup.value['quantity'],
      "price": this.ProductFormGroup.value['price'],
      "description": this.ProductFormGroup.value['description']
    }
    //console.log(body);

    this.http.post(this.BASEURL + 'api/addProductInCart', body).subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }
  OnClickAddIcon() {


  }
  OnClickRemoveIcon() {
    this.ProductFormGroup.value.quantity
  }

}
