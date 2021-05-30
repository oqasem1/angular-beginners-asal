import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);


  password = '';
  hide = true;

  tokenObj: any =[];
  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
  }

  userTypedEmail(event: any) {

    console.log("email: " + (event.target.value))
  }
  userTypedPassword(event: any) {
    console.log("password: " + (this.password = event.target.value))
  }
  getValues(event: any, email: any, password: any) {

    console.log("Submitted email: " + email.value)
    console.log("Submitted Password: " + password)

    // Call https://academeez-login-ex.herokuapp.com/api/users/login through loginService

    this._loginService.sendPostRequest(email.value, password).subscribe((token)=>{
      this.tokenObj = token;
       // then print the token object to the console
      console.log("Token: "+this.tokenObj.token)
    })


  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}
