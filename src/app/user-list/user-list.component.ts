import { Component, OnInit } from '@angular/core';
import usersData from '../../app/users.json';
import {User} from "../model/user";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counter(i: number) {
    return new Array(i);
  }

  users: User[] = usersData;
}
