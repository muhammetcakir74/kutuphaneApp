import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { UserService } from '../user.service';
import { User } from '../users/user.model';


@Component({
  selector: 'booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {


  books:Book[];
  users:User[];
  searchingBooks:Book[] =[];
  selectedBook:Book = new Book();
  bookdetail=0;
  search:string;
  user:User;


  constructor(private bS:BookService, private uS:UserService,private router:Router) { }

  searching(search:string) {
    this.searchingBooks= [];
    this.search = search;
    this.books.forEach((b) =>{
      if(b.name.toLowerCase()==this.search.toLowerCase())
      {
        this.searchingBooks.push(b);
      }
    } );
  }

  ngOnInit(): void {
    this.getBooks();
    this.getUsers();
  }

  getSelected(b:Book) {
    this.selectedBook=b;
    this.bookdetail++;
    if(this.selectedBook.userid!=null)
    {
      this.user = this.users.find(u=>u.id==this.selectedBook.userid);
    }
    else
    {
      this.user = new User();
    }
  }

  getBooks():void {
    this.bS.getBooks().subscribe(b => this.books=b);
  }
  getUsers():void {
    this.uS.getUsers().subscribe(u =>this.users=u);
  }

}
