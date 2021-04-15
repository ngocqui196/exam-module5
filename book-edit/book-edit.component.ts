import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book-service.service';
import {Book} from '../../model/book';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  sub: Subscription;
  book: Book = {
    id: '0',
    title: '',
    author: '',
    description: ''
  };

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

  editBook(id: string) {
    console.log(this.book.id);
    this.bookService.editBook(id, this.book).subscribe(res => {
      this.book = res;
    });
  }


}
