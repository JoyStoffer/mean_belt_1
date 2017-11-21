import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Bucket } from '../bucket';
import { User } from '../../user';
import { UserService } from '../../user/user.service';


@Component({
  selector: 'app-new-bucket',
  templateUrl: './new-bucket.component.html',
  styleUrls: ['./new-bucket.component.css']
})
export class NewBucketComponent implements OnInit {

     bucket: Bucket;
     user: User;

     constructor(
          private _dashboardService: DashboardService,
          private _userService: UserService
     ) { }

     ngOnInit() {
          this.bucket = new Bucket();
     }
     onSubmit(){
          this.setDates(this.bucket);
          this._dashboardService.createBucket(this.bucket, (bucket) =>{

          });

          this.bucket = new Bucket();
     }

     setDates(bucket) {
          bucket.createdAt = bucket.updatedAt = new Date();
     }


}
