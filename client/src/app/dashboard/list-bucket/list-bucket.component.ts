import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Bucket } from '../bucket';
import { User } from '../../user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-list-bucket',
  templateUrl: './list-bucket.component.html',
  styleUrls: ['./list-bucket.component.css']
})
export class ListBucketComponent implements OnInit {
     buckets: Bucket[] = [];
     users: User [] = [];

  constructor(
       private _dashboardService: DashboardService,
       private _userService: UserService
 ) { }

  ngOnInit() {
       this._dashboardService.retrieveBuckets((buckets) => {
            this.buckets = buckets;
            console.log(this.buckets);
       }, console.log);
       this._userService.retrieveUsers((users) =>{
            this.users = users;
            console.log(this.users);
       }, console.log);
     }
  }
