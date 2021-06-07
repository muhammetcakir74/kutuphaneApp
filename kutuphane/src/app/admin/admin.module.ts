import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdituserComponent } from './edituser/edituser.component';


@NgModule({
  declarations: [
    AdminComponent,
    EditBookComponent,
    MainComponent,
    EdituserComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [AuthGuard,AuthService]
})
export class AdminModule { }
