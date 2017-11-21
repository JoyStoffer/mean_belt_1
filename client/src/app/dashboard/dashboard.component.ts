import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { Bucket } from '../dashboard/bucket';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
     user: User;
  constructor(
       private _userService: UserService,
       private _router: Router
 ) { }

  ngOnInit() {

  }

}
