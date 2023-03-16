import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserListV2Component } from './user-list-v2/user-list-v2.component';

export const ADMIN_ROUTES:Routes =[
  { path: '', component: UserListComponent},
  { path: '', component: UserListV2Component}
]
