import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewBucketComponent } from './dashboard/new-bucket/new-bucket.component';
import { ListBucketComponent } from './dashboard/list-bucket/list-bucket.component';
import { DashboardService } from './dashboard/dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent,
    DashboardComponent,
    NewBucketComponent,
    ListBucketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
       UserService,
       DashboardService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
