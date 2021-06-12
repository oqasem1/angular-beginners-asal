import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule

  ],
  exports:[
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule

  ]
})
export class AsalCommonModule { }
