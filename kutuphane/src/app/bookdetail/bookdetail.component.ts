import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { UserService } from '../user.service';
import { User } from '../users/user.model';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {


  books:Book[];
  users:User[];
  user:User;
  activeUser:User;


  selectedBook;
  constructor(private route: ActivatedRoute, private bS:BookService, private uS:UserService) { }

  ngOnInit(): void {
    this.getBooks();

    this.route.paramMap
      .subscribe(params=> {
        let id = +params.get('id');
        this.selectedBook = this.books.find(i=>i.id===id);
      });

      this.getUsers();
      this.bookDetection();
      this.getActiveUser();

  }

  getBooks():void {
    this.bS.getBooks().subscribe(b => this.books=b);
  }

  getUsers():void {
    this.uS.getUsers().subscribe(u=>this.users=u);
  }

  getActiveUser():void {
    this.uS.getActiveUser().subscribe(au=>this.activeUser=au);
  }

  bookDetection():void {
    this.user = this.users.find(u=>u.id==this.selectedBook.userid);
  }

  requestBook() {
    if(confirm(`Sayın ${this.activeUser.name} ${this.selectedBook.name} isimli kitabı alıyorsunuz emin misiniz?`))
    {
      if(this.activeUser.bookid!=null)
      {

        let book = this.books.find(b=>b.id==this.activeUser.bookid);

        if(confirm(`Sayın ${this.activeUser.name} sahip olduğunuz ${book.name} isimli kitap bırakılacak onaylıyor musunuz ?`))
        {
          this.bS.requestBook(this.selectedBook.id,this.activeUser.id);
          this.uS.requestBook(this.activeUser.id,this.selectedBook.id);
          this.bookDetection();
          window.alert("Kitabı başarıyla aldınız!");
        }

      }
      else
      {
        this.bS.requestBook(this.selectedBook.id,this.activeUser.id);
        this.uS.requestBook(this.activeUser.id,this.selectedBook.id);
        this.bookDetection();
        window.alert("Kitabı başarıyla aldınız!");
      }

    }


  }


}
