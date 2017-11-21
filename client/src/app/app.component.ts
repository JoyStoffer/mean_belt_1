import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
     constructor(
          private _userService: UserService,
          private _route: Router
     ) { }

     ngOnInit() {
          this._userService.getCurrentUser(
               //decide where to go
               (user) => {
                    console.log(this._userService.currentUser);
                    if (!user){
                         this._route.navigateByUrl('/');
                    }
               },
               console.log
          );
     }
}
