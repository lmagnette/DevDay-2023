import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    standalone: true,
    imports: [NgFor, AsyncPipe]
})
export class UserListComponent {

  users$ = this.userService.getUsers();
  constructor(private userService:UserService) { }
}
