import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { UserService } from '../user.service';
import { User } from '../users/user.model';



@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


  books:Book[];
  user:User;
  emptyBooks:number=0;
  fillBooks:number=0;

  constructor(private bS:BookService,private uS:UserService)
  {
    this.uS.getActiveUser().subscribe(u=>this.user=u);

  }

  ngOnInit(): void {
    this.getBooks();
    this.getCounts();
  }

  getBooks():void {
    this.bS.getBooks().subscribe(b => this.books=b);
  }

  getEmpty()
  {
    this.getBooks();
    this.books = this.books.filter(b=>b.userid==null);

  }
  getFill()
  {
    this.getBooks();
    this.books = this.books.filter(b=>b.userid!=null);
  }
  getAll()
  {
    this.getBooks();
  }

  getCounts(){
    this.books.forEach(b => {
      if(b.userid==null)
      {
        this.emptyBooks++;
      }
      else{
        this.fillBooks++;
      }
    });
  }

}
