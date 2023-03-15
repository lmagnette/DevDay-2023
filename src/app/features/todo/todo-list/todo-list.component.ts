import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos$:Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = todoService.getTodos();
  }
}
