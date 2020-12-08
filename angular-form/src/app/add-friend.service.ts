import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from "./friend";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private url: string

  constructor(private http: HttpClient) {
  }

  addFriend(friend: Friend) {
    return this.http.post(this.url, friend)
  }
}

