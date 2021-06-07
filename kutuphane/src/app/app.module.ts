import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { UsersModule } from './users/users.module';




@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavbarComponent,
    NotfoundComponent,
    BooklistComponent,
    BookdetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    UsersModule,
    AppRoutingModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
