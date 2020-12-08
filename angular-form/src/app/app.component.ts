import {Component} from '@angular/core';
import {Friend} from "./friend";
import {ConfigService} from "./add-friend.service"
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-form';
  languages = [{name: 'JavaScript'}, {name: 'PHP'}, {name: 'English'}];
  friendModel = new Friend(null, null, null, null, null);

  private addFriendService: ConfigService

  constructor(addFriendService: ConfigService) {
    this.addFriendService = addFriendService;
  }

  onSubmit() {
    const observable = this.addFriendService.addFriend(this.friendModel)
    observable.subscribe(data => console.log("it worked"), error => console.error("it didn't work"))
    console.log(this.friendModel)
  }


}

