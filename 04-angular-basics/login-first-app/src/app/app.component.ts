import { unsupported } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-first-app';

  private _userEmail: string = '';
  public get userEmail(): string {
    return this._userEmail;
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }

  loginOutput(msg: string) {
    this.userEmail = msg;
    if(msg!=undefined)
    console.log("Login successfuly "+msg);
  }

  publishLogin(){
    return this.userEmail;
  }
}
