import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import {
  FormControl,
  FormGroup,
  FormRecord,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { getRouteParams$ } from '../../../shared/routes.composable';
import { BasicTooltipDirective } from '../../../shared/basic-tooltip.directive';

@Component( {
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.scss' ],
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    NgForOf,
    AsyncPipe,
    BasicTooltipDirective
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

  constructor(private todoService: TodoService, formBuilder: NonNullableFormBuilder) {

    this.todoForm = formBuilder.group({
      title: '',
      id: 0,
      completed: formBuilder.control(false),
    })
  }

  addTodo() {
    this.addingTodo = false
    this.todoForm.value.id = Math.floor(Math.random() * 1000);
    this.todoForm.value.title = this.todoForm.value.title?.trim();
    this.todoForm.value.completed = false;



    const langs = new FormRecord<FormControl<string>>({ });

    langs.addControl('keyName',
      new FormControl('English', { nonNullable: true })
    );

  }

}
