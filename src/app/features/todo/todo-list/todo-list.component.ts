import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { getRouteParams$ } from '../../../shared/routes.composable';

@Component( {
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.scss' ],
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    NgForOf,
    AsyncPipe
  ],
  standalone: true
})
export class TodoListComponent {

  todos$:Observable<Todo[]> = this.todoService.getTodos();
  addingTodo = false;
  todoForm:FormGroup<{
    title: FormControl<string>,
    id: FormControl<number>,
    completed: FormControl<boolean>
  }>;
  param$ = getRouteParams$('id');

  constructor(private todoService: TodoService, formBuilder: FormBuilder) {

    this.todoForm = formBuilder.nonNullable.group({
      title: '',
      id: 0,
      completed: formBuilder.nonNullable.control(false)
    })
  }

  addTodo() {
    this.addingTodo = false
    this.todoForm.value.id = Math.floor(Math.random() * 1000);
    this.todoForm.value.title = this.todoForm.value.title?.trim();
    this.todoForm.value.completed = false;
  }

}
