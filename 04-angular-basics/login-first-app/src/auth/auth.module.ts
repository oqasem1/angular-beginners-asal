import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AsalCommonModule } from 'src/asal-common/asal-common.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
   AsalCommonModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent

  ]
})
export class AuthModule { }
