import { Component, OnInit } from '@angular/core';
import usersData from '../../users.json';
import {User} from "../../core/model/user";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[] = usersData;

  constructor() { }

  ngOnInit(): void {
  }
  counter(i: number) {
    return new Array(i);
  }

  Delete(user:User) {
    let i = this.users.indexOf(user)
    if (i!=-1) {
      this.users.splice(i,1);
    }
  }

}
