import { Component, OnInit } from '@angular/core';
import {BookService} from '../../book-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-remove',
  templateUrl: './book-remove.component.html',
  styleUrls: ['./book-remove.component.css']
})
export class BookRemoveComponent implements OnInit {
    sub: Subscription
  book: Book = {
    id: '0',
    title: '',
    author: '',
    description: ''
  };
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.getBookById(id).subscribe(result => {
        this.book = result;
        console.log(this.book);
        this.deleteBook(this.book.id)
      });
    });
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(this.book.id).subscribe(res => {
      alert('đã xoá ' + res + 'thành công')
    });
  }

}
