import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;

  constructor(public authService: AuthService, public router:Router) {
    this.setMessage();
   }

  login() {
    this.authService.login();
    this.setMessage();


    if(this.authService.isAuthenticated())
    {
      let redirectUrl = '/admin/main';
      this.router.navigateByUrl(redirectUrl);
    }

  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }


  setMessage() {
    this.message = "Giriş ";

    if(this.authService.isAuthenticated())
    {
      this.message+="yaptınız."
    }
    else
    {
      this.message+="yapmadınız. Yönetim sayfasına geçiş için giriş yapmanız gerek."
    }


  }


  ngOnInit(): void {
  }

}
