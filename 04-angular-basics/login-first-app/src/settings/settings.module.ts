import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';



@NgModule({
  declarations: [
    UserSettingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ // to expose outside the user setiings module, but if you don't want other components to be exposed, then we don't expose and can be only used with settings module
    UserSettingsComponent
  ]
})
export class SettingsModule { }
