import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from "./friend";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private url: string

  constructor(private http: HttpClient) {
    this.http = http;
  }

  addFriend(friend: Friend) {
    this.url = "http://localhost:9000/addFriend"
    return this.http.post(this.url, friend)
  }
}

