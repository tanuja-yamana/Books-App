import { Component, OnInit } from '@angular/core';
import { NewBookCardService } from './services/new-book-card.service';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.scss']
})
export class NewBooksComponent implements OnInit {

  allBooks: any[] = [];
  books: any[] = [];

  constructor(private newBookCardService: NewBookCardService) { }

  ngOnInit(): void {
    this.newBookCardService.getBooks().subscribe((data: any) => {
      this.allBooks = data.books;

      const t = this.allBooks.length; // set `t` after data is loaded

      for (let i = 0; i < t; i++) {
        const randomIndex = Math.floor(Math.random() * this.allBooks.length);
        this.books.push(this.allBooks[randomIndex]);
      }
    });
  }
}

