import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

const ROUTES: Routes = [
  {path: 'todos', loadChildren: () => import('./app/features/todo/todo.routes').then(m => m.TODO_ROUTES)},
  {path: 'users', loadChildren: () => import('./app/features/admin/admin.routes').then(m => m.ADMIN_ROUTES)},
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
