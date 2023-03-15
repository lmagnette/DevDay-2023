import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserListV2Component } from './user-list-v2/user-list-v2.component';

const routes: Routes = [

  //{ path: '', component: UserListComponent},
  { path: '', component: UserListV2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
