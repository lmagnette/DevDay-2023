import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-v2',
  templateUrl: './user-list-v2.component.html',
  styleUrls: ['./user-list-v2.component.scss']
})
export class UserListV2Component {

  users$ = this.userService.getUsers();
  constructor(private userService:UserService) { }

}
