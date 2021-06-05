import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  template: `

    <mat-selection-list #tasksList>
      <mat-list-option *ngFor="let task of tasks2$ | async">
            {{task.title}}
      </mat-list-option>
    </mat-selection-list>

  <p>
    Options selected: {{tasksList.selectedOptions.selected.length}}
  </p>


  `,
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: any =[];
  tasks2$: Observable<any> = null;
  constructor(private _tasks: TaskService) { }

  ngOnInit(): void {
    this.tasks2$=this._tasks.getTasks();

    /*
      Replace subscribe to event callback by use the async pipe for the TodoList component
    */
    //this._tasks.getTasks().subscribe((tasksJson)=>{
    //this.tasks = tasksJson;
    //})
  }

}
