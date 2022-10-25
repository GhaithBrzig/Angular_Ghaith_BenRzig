import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../../../Downloads/complete-the-work-on-the-userlist-GhaithBrzig/src/app/core/services/user.service";
import {User} from "../../core/model/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 id: any;
selectedUser: User;
  constructor(private route:ActivatedRoute, private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.selectedUser = this.userService.users.find(u => u.id == this.id)!;
    console.log(this.selectedUser)
  }


  userDelete(selectedUser: User) {
    let i = this.userService.users.indexOf(selectedUser)
    if (i!=-1) {
      this.userService.users.splice(i,1);
    }
    this.router.navigate(['/user/list'])
  }

  Back() {
    this.router.navigate(['/user/list'])
  }
}
