import { Component, OnInit } from '@angular/core';
import { NewBookCardService } from './services/new-book-card.service';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.scss'],
  providers: [NewBookCardService]
})
export class NewBooksComponent implements OnInit {

  books: any[] = [];
  constructor(private newBookCardService: NewBookCardService) { }

  ngOnInit(): void {
    this.newBookCardService.getBooks().subscribe((data: any)=>{
      this.books = data.books.slice(0, 10);
    })
  }

}
