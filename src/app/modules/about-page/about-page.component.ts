import { Component, OnInit } from '@angular/core';
import { BookListService } from 'src/app/book-list.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  bookList: string[] = [];
  newBook: string = '';
  editModeIndex: number | null = null;
  editedBook: string = '';

  constructor(private bookListService: BookListService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookList = this.bookListService.getBooks();
  }

  addBook(): void {
    if (this.newBook.trim()) {
      this.bookListService.addBook(this.newBook);
      this.newBook = '';
      this.loadBooks();
    }
  }

  deleteBook(index: number): void {
    this.bookListService.deleteBook(index);
    this.loadBooks();
  }

  startEditing(index: number): void {
    this.editModeIndex = index;
    this.editedBook = this.bookList[index];
  }

  updateBook(): void {
    if (this.editModeIndex !== null && this.editedBook.trim()) {
      this.bookListService.updateBook(this.editModeIndex, this.editedBook);
      this.editModeIndex = null;
      this.editedBook = '';
      this.loadBooks();
    }
  }

  cancelEdit(): void {
    this.editModeIndex = null;
    this.editedBook = '';
  }
}
