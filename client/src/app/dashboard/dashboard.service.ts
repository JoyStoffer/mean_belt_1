import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user/user';
import { Bucket } from './bucket';
import { UserService } from '../user/user.service'


@Injectable()
export class DashboardService {
     user: User;
     users: User[] = [];
     buckets: Bucket[] = [];


      constructor(
           private _http: Http,
           private _userService: UserService,

      ) { }

      retrieveBuckets(callback, errorback): void {
           //Make an http call to /buckets to get all buckets in db
           this._http.get('/buckets').subscribe(
                (res) => {
                     this.buckets = res.json();

                     callback(this.buckets);
                },//Successful Observable
                (err) => {
                     errorback(err);
                }  //Unsuccessful Observable
           )
        }

      createBucket(bucket: Bucket, callback){
           //send bucket to server using http to store bucket in db
           this._http.post('/buckets', bucket).subscribe(
                (res) => {
                     const bucket = res.json();

                     this.buckets.push(bucket);

                     callback(bucket);
                }, //Successful Observable
                (err) => {

                } //Unsuccessful Observable
           );
      }
 }
  // retrieveUser(callback, errorback): void {
  //      //Make an http call to /notes to get all notes in db
  //      this._http.get('/users').subscribe(
  //           (res) => {
  //                this.users = res.json();
  //
  //                callback(this.users);
  //           },//Successful Observable
  //           (err) => {
  //                errorback(err);
  //           }  //Unsuccessful Observable
  //      )
  //  }
