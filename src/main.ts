import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

const ROUTES: Routes = [
  {path: 'todos', loadComponent: () => import('./app/features/todo/todo-list/todo-list.component').then(c=>c.TodoListComponent) },
  {path: 'users', loadChildren: () => import('./app/features/admin/admin.module').then(m => m.AdminModule)},
  {path: 'signals', loadComponent: () => import('./app/features/signals/signals/signals.component').then( m => m.SignalsComponent)},
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
];

bootstrapApplication(AppComponent,{
  providers: [
    provideRouter(ROUTES),
    provideHttpClient(),
    provideNoopAnimations(),
  ]
}).catch(err => console.error(err));
