import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  template: `

    <mat-selection-list #tasksList>
      <mat-list-option *ngFor="let task of tasks">
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
  constructor(private _tasks: TaskService) { }

  ngOnInit(): void {
    this._tasks.getTasks().subscribe((tasksJson)=>{
    this.tasks = tasksJson;
    })
  }

}
