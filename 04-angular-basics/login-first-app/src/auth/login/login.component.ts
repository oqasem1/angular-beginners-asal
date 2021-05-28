import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public email='';
public password ='';
  constructor() { }

  ngOnInit(): void {
  }

  userTypedEmail(event: any){

    console.log("email: "+(this.email=event.target.value))
  }
  userTypedPassword(event: any){
    console.log("password: "+(this.password=event.target.value))
  }
  getValues(event: any, email: any, password: any){

    console.log("Submitted email: "+email)
    console.log("Submitted Password: "+password)
  }


}
