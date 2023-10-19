import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Use the ActivatedRoute to get the book ID from the URL
    this.route.params.subscribe((params) => {
      const bookId = params['id'];

      // Call your service method to get the book details by ID
      this.bookService.getBooks().subscribe((data) => {
        this.book = data;
      });
    });
  }
}
