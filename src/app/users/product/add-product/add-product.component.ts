import { Component, OnInit } from '@angular/core';
//import { ImageService } from './image.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductComponent } from '../product.component';


// class Image {
//   constructor(public src: string, public file: File) { }
// }

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  ProductFormGroup: FormGroup;
  isValidated: boolean;
  x: number;
  // BASEURL: string = 'http://127.0.0.1:5000/'

  // selectedFile: Image;

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
    // var inputProductname = this.ProductFormGroup.value.pname
    // var inputQuantity = this.ProductFormGroup.value.quantity

    // this.http.get(this.BASEURL + '/api/getVotka').subscribe(
    //   res => {
    //     this.isValidated = this.validateUser(res, inputEmail, inputPass);
    //     if (this.isValidated) {
    //       this.router.navigate(['/product']);
    //     }
    //   },
    //   error => {
    //     console.log(error)
    //   }
    // )
  }
  OnClickAddIcon() {


  }
  OnClickRemoveIcon() {
    this.ProductFormGroup.value.quantity
  }

}
