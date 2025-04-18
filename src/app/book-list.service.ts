import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  private bookList: string[] = [
    'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Python',
    'MongoDB', 'Node', 'Databases', 'JSON',
    'AWS', 'Flask', 'Angular', 'Express'
  ];

  constructor() { }

  getBooks(): string[] {
    return [...this.bookList]; // return a copy to avoid external mutation
  }

  addBook(book: string): void {
    this.bookList.push(book);
  }

  updateBook(index: number, updatedBook: string): void {
    if (index >= 0 && index < this.bookList.length) {
      this.bookList[index] = updatedBook;
    }
  }

  deleteBook(index: number): void {
    if (index >= 0 && index < this.bookList.length) {
      this.bookList.splice(index, 1);
    }
  }
}
