import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../userauth.service';
import { Users } from 'src/app/users/userdatasource.model';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { UserService } from 'src/app/user.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  message:string;
  register=0;

  name = new FormControl("",[Validators.required,Validators.minLength(5)]);
  surname = new FormControl("",[Validators.required,Validators.minLength(5)]);
  usernamee = new FormControl("",[Validators.required,Validators.minLength(5),Validators.pattern('^[A-Za-z]+$')]);
  passwordd = new FormControl("",[Validators.required,Validators.minLength(5)]);

  constructor(public authService: UserAuthService, public router:Router,private uS:UserService) {
    this.setMessage();
   }

  login(username:string,password:string) {



    this.setMessage();

    let user;
     try {
      user = Users.find(u=>u.name == username).id;
      if(user)
      {
        if(Users.find(u=>u.password == password))
        {
          this.authService.login();
          if( this.authService.isAuthenticated())
          {
            this.uS.changeActiveUser(user);
            this.router.navigate(['/users',user]);
          }
        }
        this.message = "Kullanıcı adı veya Parola hatalı."
      }
      else
      {
        this.message = "Kullanıcı adı veya Parola hatalı."
      }


     } catch (error) {
       this.message = "Kullanıcı adı veya Parola hatalı.";
     }






  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  userRegister(){
    this.register=1;
  }

  addUser(realname,realsurname,username,password)
  {
    this.uS.addUser(realname,realsurname,username,password);
    this.register--;

  }


  setMessage() {
    this.message = "Giriş ";

    if(this.authService.isAuthenticated())
    {
      this.message+="yaptınız."
    }
    else
    {
      this.message+="yapmadınız. Kullanıcı sayfasına geçiş için giriş yapmanız gerek."
    }


  }


  ngOnInit(): void {
  }


}
