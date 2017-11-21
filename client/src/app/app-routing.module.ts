import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBucketComponent } from './dashboard/list-bucket/list-bucket.component';

const routes: Routes = [
     { path: 'user', component: UserComponent, children: [
          { path: 'new', component: UserNewComponent }
     ]},
     { path: 'dashboard', component: DashboardComponent, children:[
          {path: '', component: ListBucketComponent}
     ]},

     { path: '', pathMatch: 'full', component: UserComponent, children: [
          { path: '', component: UserNewComponent }
     ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
