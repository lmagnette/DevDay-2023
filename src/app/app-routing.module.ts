import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: 'todos', loadChildren: () => import('./features/todo/todo.module').then(m => m.TodoModule)},
  {path: 'users', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)},
  {path: 'signals', loadComponent: () => import('./features/signals/signals/signals.component').then( m => m.SignalsComponent)},
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
