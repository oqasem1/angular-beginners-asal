import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import {HttpClientModule} from '@angular/common/http'
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoModule { }
