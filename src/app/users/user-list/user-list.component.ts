import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../core/model/user";
import {StatsService} from "../../core/services/stats.service";
import {UserService} from "../../../../../../Downloads/complete-the-work-on-the-userlist-GhaithBrzig/src/app/core/services/user.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[] = this.userService.users;
  public filteredList: User[];

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.filteredList = this.users
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
  onSelectedUser(user: any) {
    this.router.navigate(['/user/profile', user.id])
  }


  filterUser(category:String) {
    if(category != null && category!="All") {
  this.filteredList = this.users.filter(user => user.gender == category)
    } else {
      this.filteredList = this.users
    }
  }
}
