import {Component} from '@angular/core';
import {Friend} from "./friend";
import {ConfigService} from "./add-friend.service"
import {HttpClient} from "@angular/common/http";
import {OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-form';
  languages = [{name: 'JavaScript'}, {name: 'PHP'}, {name: 'English'}];
  friendModel = new Friend(null, null, null, null, null);

  private addFriendService: ConfigService;
  public allFriends: any;

  constructor(addFriendService: ConfigService) {
    this.addFriendService = addFriendService;
  }

  onSubmit() {
    const observable = this.addFriendService.addFriend(this.friendModel);
    observable.subscribe(data => console.log("it worked"), error => console.error("it didn't work"));
    console.log(this.allFriends);

  }

  public async fetchData(url: string): Promise<any> {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return this.allFriends = await response.json();

  }

  ngOnInit(): any {
    this.fetchData('http://localhost:9000/allFriends');
  }

}



