import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  sendPostRequest(email: string, password: string) {
    return this._http.post('https://academeez-login-ex.herokuapp.com/api/users/login',
      {
        email: email, 'password': password
      })
  }
}
