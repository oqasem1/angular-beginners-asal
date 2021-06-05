import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input('url')
  url=''

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  clicked: boolean =  false
  hide = true;

  tokenObj: any =[];
  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
  }

  userTypedEmail(event: any) {

    console.log("email: " + (event.target.value))
    this.clicked=false;
  }
  userTypedPassword(event: any) {
    console.log("password: " + (event.target.value))
    this.clicked=false;
  }
  getValues() {

    console.log("Submitted email: " + this.email.value)
    console.log("Submitted Password: " + this.password.value)

  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }
    return '';
  }


  onSubmit() {
    this.tokenObj = []
    this.getValues()
    this._loginService.url = this.url;
    console.log('Form submitted!');

    // Call https://academeez-login-ex.herokuapp.com/api/users/login through loginService

    this._loginService.sendPostRequest(this.email.value, this.password.value).subscribe((token) => {
      this.tokenObj = token;
      this.emitLogin(true);
      // then print the token object to the console
      console.log("Token: " + this.tokenObj.token)
      this.clearForm();
    }, (err) => {
      console.log(err)
      console.log("Token .. " + this.tokenObj.token)
      this.emitLogin(false);
      this.clearForm();
    });

  }

  @Output()
  login: EventEmitter<string> = new EventEmitter();

  emitLogin(success: boolean) {
    let email = this.email.value;
    console.log("email value:"+email)
    success?this.login.emit(email): this.login.emit(undefined)

  }
  clearForm(){

    this.clicked=true;
    this.email.reset()
    this.password.reset()
    this.email.setErrors(null);
    this.password.setErrors(null);
  }


}
