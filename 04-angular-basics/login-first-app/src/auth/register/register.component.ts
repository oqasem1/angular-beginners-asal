import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match/must-match.validator';
import Validation from './must-match/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
    submitted = false;



    // Getter method to access formcontrols
    // convenience getter for easy access to form fields
    get myForm(): { [key: string]: AbstractControl } {
      return this.registrationForm.controls;
    }


  hide = true;
  hideConfirmation = true;

  tokenObj: any =[];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this._formBuilder.group({

      email: ['', [Validators.required, Validators.email]],

        password: ['', [Validators.required, Validators.minLength(3)]],
        confirmPassword: ['', [Validators.required]]
      },{
        validators: [Validation.match('password', 'confirmPassword')]
    })


  }

  userTypedEmail(event: any) {

    console.log("email: " + (event.target.value))

  }
  userTypedPassword(event: any) {
    console.log("password: " + (event.target.value))

  }
  userTypedConfirmPassword(event: any) {
    console.log("Confirm password: " + (event.target.value))

  }

  getValues() {

    console.log("Submitted email: " + this.myForm.email)
    console.log("Submitted Password: " + this.myForm.password)

  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value, null, 4));
    this.onReset();
}



onReset() {
  this.submitted = false;
  this.registrationForm.reset();
  this.myForm.password.setErrors(null);
  this.myForm.confirmPassword.setErrors(null);
  this.myForm.email.setErrors(null);

}



}
