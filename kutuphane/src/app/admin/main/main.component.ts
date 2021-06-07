import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book.model';

import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { Books } from 'src/app/datasource.model';
import { FormControl, Validators } from '@angular/forms';
import { ImageValidators } from '../image.validator';
import { UserService } from 'src/app/user.service';
import { Users } from 'src/app/users/userdatasource.model';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  books:Book[];
  users:User[];
  selectedBook:Book = new Book();
  selectedUser:User = new User();
  bookdetail=0;
  btnKitapEkle=false;
  btnUserEkle=false;
  state:string="book";

  name = new FormControl("",[Validators.required,Validators.minLength(5)]);
  description = new FormControl("",[Validators.required,Validators.minLength(20)]);
  imageUrl = new FormControl("",[Validators.required,ImageValidators.isValidExtension]);



  constructor(public router:Router, public authService:AuthService,private bS:BookService, private uS:UserService)
  {
    this.uS.getUsers().subscribe(u => this.users=u);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  ngOnInit(): void {
    this.getBooks();
  }





  getSelected(b:Book) {
    this.selectedBook=b;
    this.bookdetail++;
  }

  getSelectedU(u:User) {
    this.selectedUser=u;
    this.bookdetail++;
  }



  redirectUpdate(book:number){
    var bookWillUpdate = book;

    this.router.navigate(['/admin/edit',bookWillUpdate]);
  }

  getBooks():void {
    this.bS.getBooks().subscribe(b => this.books=b);
  }

  deleteBook(id:number) {
    let bookName = Books.find(i => i.id==id).name;
    let book = Books.find(b=>b.id==id);

    if(confirm(bookName+' '+"isimli kitap silinecek emin misiniz?"))
    {
      this.bS.deleteBook(id);
      if(book.userid!=null)
      {
        this.uS.removeBook(book.id);
      }
    }
  }

  addBook(name,description,imageUrl){


    this.bS.addBook(name,description,imageUrl);
    window.alert("Kitap eklendi");

  }

  updateUser(user:User){
    var userWillUpdate = user;

    this.router.navigate(['/admin/edituser',userWillUpdate.id]);
  }

  deleteUser(id:number){
    let userName = Users.find(u=>u.id == id).name;
    let user = Users.find(u=>u.id==id);

    if(confirm(userName+' '+"isimli kullanıcı silinecek emin misiniz?"))
    {
      this.uS.deleteUser(id);
      if(user.bookid!=null)
      {
        this.bS.removeUser(user.id);
      }
    }
  }

  getBooksUI()
  {
    this.state="book";
  }

  getUsersUI()
  {
    this.state="user";
  }






}
