import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserListV2Component } from './user-list-v2/user-list-v2.component';
import { adminAsFunctionGuard } from './admin-as-function.guard';

export const ADMIN_ROUTES:Routes =[
  {
    path: '',
    component: UserListComponent,
    canMatch: [adminAsFunctionGuard]
  },
  {
    path: '',
    component: UserListV2Component
  }
]
