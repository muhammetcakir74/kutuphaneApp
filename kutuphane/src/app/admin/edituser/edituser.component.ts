import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book.model';
import { BookService } from 'src/app/book.service';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private uS:UserService,private bS:BookService) { }


  users:User[];
  books:Book[];
  book:Book;
  selectedUser;
  userWillUpdate:User;

  ngOnInit(): void {
    this.getUsers();

    this.route.paramMap
      .subscribe(params=> {
        let id = +params.get('id');
        this.selectedUser = this.users.find(i=>i.id===id);
      });
    this.getBooks();

    if(this.selectedUser.bookid!=null)
    {
      this.book = this.books.find(b => b.id==this.selectedUser.bookid);
    }


  }


  getUsers():void {
    this.uS.getUsers().subscribe(u => this.users=u);
  }

  getBooks():void {
    this.bS.getBooks().subscribe(b => this.books=b);
  }


  updateUser(urn:string,ursn:string,un:string,pw:string){
    let id = this.selectedUser.id;
    let username = un;
    let realname = urn;
    let realsurname = ursn;
    let password = pw;

    if(this.uS.updateUser(id,username,realname,realsurname,password))
    {
      window.alert("Güncelleme başarılı");
      this.router.navigate(['/admin/main']);
    }

  }

  removeBookFromUser(){
    if(confirm("Kitap kullanıcıdan alınacak emin misiniz?"))
    {
      this.bS.removeUser(this.selectedUser.bookid);
      this.uS.removeBook(this.selectedUser.id);
      this.book = null;
    }

  }

}
