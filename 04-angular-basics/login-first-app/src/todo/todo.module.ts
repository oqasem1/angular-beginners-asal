import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AsalCommonModule } from 'src/asal-common/asal-common.module';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    AsalCommonModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoModule { }
