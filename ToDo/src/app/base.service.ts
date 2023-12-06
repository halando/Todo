import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private todoSub = new Subject()
  private url="https://localhost:7282/api/Todoes/"

  constructor(private http:HttpClient) { 
    this.loadData()
  }
  private loadData(){
    this.http.get(this.url,).subscribe(
      (res)=> {
        this.todoSub.next(res)
      }
    )
  }

  getToDo(){
    return this.todoSub
  }

  postTodo(body:any){
    this.http.post(this.url, body).subscribe(
      ()=>this.loadData()
    )
  }
  putTodo(body:any){
    this.http.put(this.url+body.id, body).subscribe(
      ()=>this.loadData()
    )
  }
  deleteTodo(body:any){
    this.http.delete(this.url+body.id).subscribe(
      ()=>this.loadData()
    )
  }


}
