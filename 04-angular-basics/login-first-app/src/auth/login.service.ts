import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url: string = '';

  get url(): string {
    return this._url;
  }
  set url(value: string) {
    this._url = value;
  }
  constructor(private _http: HttpClient) { }

  sendPostRequest(email: string, password: string) {
    return this._http.post(this.url,
      {
        email: email, 'password': password
      })
  }
}
