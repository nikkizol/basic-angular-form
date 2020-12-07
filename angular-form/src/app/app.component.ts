import {Component} from '@angular/core';
import {Friend} from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-form';
  languages = [{name: 'JavaScript'}, {name: 'PHP'}, {name: 'English'}];
  friendModel = new Friend(null,null,null,null, null)

  // constructor() { }

  onSubmit(form) {
    console.log(form.value)
  }
}

