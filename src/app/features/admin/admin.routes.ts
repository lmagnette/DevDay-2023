import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const ADMIN_ROUTES:Routes =[
  { path: '', component: UserListComponent},
  //{ path: '', component: UserListV2Component}
]
