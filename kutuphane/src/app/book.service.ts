import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Books } from 'src/app/datasource.model';
import { empty, Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookService {


  emptyBook:Book = new Book(null,"","","",null);

  constructor() { }


  getBooks(): Observable<Book[]> {
    return of(Books);
  }


  updateBook(id,name,description,imageurl):boolean {
    let book = Books.find((i)=>i.id==id);
    book.name = name;
    book.description = description;
    book.imageUrl = imageurl;
    return true;
  }

  requestBook(bookid:number,userid:number){
    this.emptyBook = Books.find(b => b.userid==userid);

    if(!this.emptyBook)
    {
      let book = Books.find((i)=>i.id==bookid);
      book.userid = userid;
    }
    else
    {
      this.emptyBook.userid = null;

      let book = Books.find((i)=>i.id==bookid);
      book.userid = userid;

    }



  }

  deleteBook(id:number) {
    let book = Books.find((i)=>i.id==id);
    let a =0;
    Books.forEach((b)=> {
        if(b.id==book.id)
        {
          Books.splice(a,1);
        }
        else
        {
          a++;
        }
    });
  }

  addBook(name,description,imageUrl){
    let count = Books.length;
    Books.push(new Book(count+1,name,description,imageUrl));
  }

  removeUser(id:number){
    let book = Books.find(b=>b.id==id);
    book.userid = null;
  }

}
