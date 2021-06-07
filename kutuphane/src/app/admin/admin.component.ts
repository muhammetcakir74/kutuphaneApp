import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  selectedBook:Book = new Book();
  bookdetail=0;

  constructor() { }

  ngOnInit(): void {
  }

  getSelected(b:Book) {
    this.selectedBook=b;
    this.bookdetail++;
  }

}
