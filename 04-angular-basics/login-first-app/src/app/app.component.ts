import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-first-app';

  loginOutput(msg: string) {
    console.log("Login successfuly "+msg);
  }
}
