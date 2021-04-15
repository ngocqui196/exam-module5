import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../book-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.getBookById(id).subscribe(result => {
        this.book = result;
        console.log(this.book);
      });
    });
  }

}
