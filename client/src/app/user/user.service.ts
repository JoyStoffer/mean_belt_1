import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';


@Injectable()
export class UserService {
     currentUser: User;
     users: User[] = [];
     user: User;

  constructor(
     private _http: Http
  ) { }

     createUser(user: User, callback, errorback) {
          this._http.post('/users', user).subscribe(
               (res) => {
                    const user = res.json();

                    this.currentUser= user;

                    callback(this.currentUser);
               },
               (err) => {
                    errorback(err);
               }
          )
     }

     getCurrentUser(callback, errorback) {
          this._http.get('/sessions').subscribe(
               (res) => {
                    const user = res.json();
                    console.log(user);
                    if (user) {
                         this.currentUser = user;
                    }
                    callback(user);
               },
               (err) => {
                    errorback(err);
               }
          );

     }
     retrieveUser(callback, errorback): void {
          //Make an http call to /users to get all users in db
          this._http.get('/users').subscribe(
               (res) => {
                    this.users = res.json();

                    callback(this.users);
               },//Successful Observable
               (err) => {
                    errorback(err);
               }  //Unsuccessful Observable
          )
      }
     retrieveUsers(callback, errorback): void {
          //Make an http call to /users to get all users in db
          this._http.get('/users').subscribe(
               (res) => {
                    this.users.find () = res.json();

                    callback(this.users);
               },//Successful Observable
               (err) => {
                    errorback(err);
               }  //Unsuccessful Observable
          )
      }


     logout(callback, errorback) {
          this._http.delete('/sessions').subscribe(
               (res)=> {
                    this.currentUser = null;

                    callback(res.json());
               },
               (err) => {
                    errorback(err);
               }
          );
     }
}
