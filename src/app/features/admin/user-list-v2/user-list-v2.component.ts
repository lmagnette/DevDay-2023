import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgFor, AsyncPipe, KeyValuePipe } from '@angular/common';

@Component({
    selector: 'app-user-list-v2',
    templateUrl: './user-list-v2.component.html',
    styleUrls: ['./user-list-v2.component.scss'],
    standalone: true,
    imports: [NgFor, AsyncPipe, KeyValuePipe]
})
export class UserListV2Component {

  users$ = this.userService.getUsers();
  constructor(private userService:UserService) { }

}
