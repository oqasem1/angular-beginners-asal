import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input('url')
  url = '';

  // loginForm = this._formBuilder.group({
  //   phoneNumbers: this._formBuilder.array([
  //     this._formBuilder.group({
  //       email: ['', [Validators.required, Validators.email]],
  //       password: ['', [Validators.required, Validators.minLength(3)]]
  //     })
  //   ])
  // })

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  clicked: boolean = false;
  hide = true;

  tokenObj: any = [];
  constructor(
    private _loginService: LoginService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  userTypedEmail(event: any) {
    console.log('email: ' + event.target.value);
    this.clicked = false;
  }
  userTypedPassword(event: any) {
    console.log('password: ' + event.target.value);
    this.clicked = false;
  }
  getValues() {
    console.log('Submitted email: ' + this.loginForm.value.email);
    console.log('Submitted Password: ' + this.loginForm.value.password);
  }

  onSubmit() {
    this.tokenObj = [];
    this.getValues();
    this._loginService.url = this.url;
    console.log('Form submitted!');

    // Call https://academeez-login-ex.herokuapp.com/api/users/login through loginService

    this._loginService
      .sendPostRequest(
        this.loginForm.value.email,
        this.loginForm.value.password
      )
      .subscribe(
        (token) => {
          this.tokenObj = token;
          this.emitLogin(true);
          // then print the token object to the console
          console.log('Token: ' + this.tokenObj.token);
          this.clearForm();
        },
        (err) => {
          console.log(err);
          console.log('Token .. ' + this.tokenObj.token);
          this.emitLogin(false);
          this.clearForm();
        }
      );
  }

  @Output()
  login: EventEmitter<string> = new EventEmitter();

  emitLogin(success: boolean) {
    let email = this.loginForm.value.email;
    console.log('email value:' + email);
    success ? this.login.emit(email) : this.login.emit(undefined);
  }
  clearForm() {
    this.clicked = true;

    //this.loginForm.setErrors(null)

    //this.loginForm.setErrors(null);
    this.loginForm.reset();
    this.email.setErrors(null);
    this.password.setErrors(null);
    //this.loginForm.va
  }
}
