import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book.model';
import { BookService } from 'src/app/book.service';
import { UserService } from 'src/app/user.service';
import { Users } from 'src/app/users/userdatasource.model';
import { User } from '../user.model';
import { UserAuthService } from '../userauth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User=null;
  users:User[];
  books:Book[];
  btnEmptyBook=false;
  book;
  activeUser;


  constructor(private route:ActivatedRoute,private router:Router,private bS:BookService,private uS:UserService, private uaS:UserAuthService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params=> {
        let id = +params.get('id');
        this.user = Users.find(i=>i.id===id);

      });

      this.getBooks();
      this.getUsers();
      this.getActiveUser();

      if(this.user.bookid!=null)
      {
        this.btnEmptyBook=true;
        this.book = this.books.find(b => b.id == this.user.bookid);
      }
  }

  getUsers():void {
    this.uS.getUsers().subscribe(u=> this.users=u);
  }

  getBooks():void {
    this.bS.getBooks().subscribe(b=> this.books=b);
  }

  getActiveUser():void {
    this.uS.getActiveUser().subscribe(u=>this.activeUser=u);
  }

  removeBook() {
    if(confirm("Kitap bırakılıyor emin misiniz?"))
    {
      this.bS.removeUser(this.book.id);
      this.uS.removeBook(this.user.id);
      this.book = null;
      this.btnEmptyBook=false;
      window.alert("Kitap Bırakıldı");
    }

  }

  logOut(){
    this.uaS.logout();
    this.uS.activeUserDefault();
    this.router.navigate(['/user-login']);
  }

}
