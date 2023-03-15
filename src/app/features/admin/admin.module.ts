import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserListV2Component } from './user-list-v2/user-list-v2.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserListV2Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
