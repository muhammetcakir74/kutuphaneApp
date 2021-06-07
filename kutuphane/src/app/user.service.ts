import { Injectable } from '@angular/core';
import { User } from 'src/app/users/user.model';
import { Users,ActiveUser } from 'src/app/users/userdatasource.model'
import { Observable, of } from 'rxjs';
import { UserAuthService } from './users/userauth.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {




  constructor(private userAuthService:UserAuthService) { }


  getUsers(): Observable<User[]> {
    return of(Users);
  }

  getActiveUser():Observable<User> {
    return of(ActiveUser);
  }

  changeActiveUser(id:number) {
    let user = Users.find(u=>u.id==id);
    ActiveUser.id = user.id;
    ActiveUser.name = user.name;
    ActiveUser.realname = user.realname;
    ActiveUser.realsurname = user.realsurname;
    ActiveUser.password = user.password;
    ActiveUser.bookid = user.bookid;
  }

  activeUserDefault() {
    ActiveUser.id =0;
    ActiveUser.name = "Misafir";
  }

  addUser(realname,realsurname,username,password){
    let count = Users.length;
    Users.push(new User(count+1,username,password,realname,realsurname,null));
    window.alert(`Sayın ${realname} üyeliğiniz başarıyla oluşturuldu.\nLütfen GİRİŞ yapınız`);
  }

  updateUser(id,username,realname,realsurname,password):boolean {
    let user = Users.find((u)=>u.id==id);
    user.name = username;
    user.realname = realname;
    user.realsurname = realsurname;
    user.password = password;
    return true;
  }

  deleteUser(id:number) {
    let user = Users.find((u)=>u.id==id);
    let a =0;


    Users.forEach((u)=> {
      if(u.id==user.id)
      {
        Users.splice(a,1);
        this.userAuthService.logout();
        this.activeUserDefault();
        window.alert("Bir kullanıcı silindiği için eğer kullanıcı girişi yapmış iseniz çıkış yapıldı.\nGerekiyorsa lütfen yeniden giriş yapınız.");
      }
      else
      {
        a++;
      }
  });


  }


  requestBook(userid:number,bookid:number) {
    let user = Users.find(u=>u.id==userid);
    user.bookid = bookid;
    ActiveUser.bookid = bookid;
  }

  removeBook(id:number){
    let user = Users.find(u=>u.id==id);
    user.bookid = null;
  }


}
