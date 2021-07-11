import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  BASEURL: string = 'http://127.0.0.1:5000/'
  title = 'Angular7';

  OnClickMenuIcon() {
    console.log("MENU CLIKED");
  }

  OnClickAddIcon() {
    console.log("ADD CLIKED");
  }

  OnClickCartIcon() {
    console.log("JHURI CLIKED");
  }

}
