import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  ToDoList:any

  constructor(private base:BaseService){
    base.getToDo().subscribe(
      (res)=>this.ToDoList=res
    )
  }

  postTodo(body?:any){
    if (!body) {
      body={}
      body.name="Tanulni Angulart"
      body.isComplete=false
    }
    this.base.postTodo(body)
  }

}
