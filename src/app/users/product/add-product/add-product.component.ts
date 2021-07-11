import { Component, OnInit } from '@angular/core';
//import { ImageService } from './image.service';
import { HttpClient } from '@angular/common/http';


// class Image {
//   constructor(public src: string, public file: File) { }
// }

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  // BASEURL: string = 'http://127.0.0.1:5000/'

  // selectedFile: Image;

  constructor() { }

  ngOnInit(): void {
  }

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new Image(event.target.result, file);

  //     this.http.post(this.selectedFile.file).subscribe(
  //       (res) => {
  //         console.log(res);

  //       },
  //       (err) => {

  //       })
  //   });

  //   reader.readAsDataURL(file);

}
