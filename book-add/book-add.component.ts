import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../model/book';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book: Book;
  bookForm: FormGroup;

  constructor(private router: Router,
    private bookService: BookService,
              private fb: FormBuilder,) {
    this.bookForm = fb.group({
      id: [],
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  bookCreate() {
    console.log(this.bookForm.value);
    this.bookService.createBook(this.bookForm.value).subscribe(res => {
      this.router.navigate(['/'])
    });
  }
}
