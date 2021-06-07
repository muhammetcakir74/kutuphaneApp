import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/book.model';
import { BookService } from 'src/app/book.service';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/users/user.model';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private bS:BookService, private uS:UserService) { }

  books:Book[];
  users:User[];
  user:User;

  selectedBook;
  bookWillUpdate:Book;

  ngOnInit(): void {
    this.getBooks();


    this.route.paramMap
      .subscribe(params=> {
        let id = +params.get('id');
        this.selectedBook = this.books.find(i=>i.id===id);
      });

      this.getUsers();
      this.user = this.users.find(u=>u.id==this.selectedBook.userid);

  }

  getBooks():void {
    this.bS.getBooks().subscribe(b => this.books=b);
  }

  getUsers():void {
    this.uS.getUsers().subscribe(u=>this.users=u);
  }



  updateBook(bn:string,bd:string,un:string,bi:string){
    let id = this.selectedBook.id;
    let name = bn;
    let description = bd;
    // let username = un;
    let imageUrl = bi;

    if(this.bS.updateBook(id,name,description,imageUrl))
    {
      window.alert("Güncelleme başarılı");
      this.router.navigate(['/admin/main']);
    }

  }

}
