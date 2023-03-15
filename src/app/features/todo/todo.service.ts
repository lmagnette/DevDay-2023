import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private http:HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
