import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../book-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
      console.log(this.books)
    }, error => {
      console.log(error)
    })
  }

}
