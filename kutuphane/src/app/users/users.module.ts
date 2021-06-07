import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserAuthGuard } from './userauth-guard.service';
import { UserAuthService } from './userauth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    UserloginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  providers: [UserAuthGuard,UserAuthService]
})
export class UsersModule { }
