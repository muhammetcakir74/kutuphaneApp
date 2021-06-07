import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserAuthGuard } from './userauth-guard.service';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'user-login',component:UserloginComponent},
  {
    path:'users/:id',
    canActivate: [UserAuthGuard],
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
