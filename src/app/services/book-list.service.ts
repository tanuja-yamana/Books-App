import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  private bookCategoryList: string[] = [
    'HTML', 'CSS', 'JavaScript', 'NodeJS', 'Python',
    'MongoDB', 'Node', 'Databases', 'JSON',
    'AWS', 'Flask', 'Angular', 'Express'
  ];

  constructor() { }

  getBooks(): string[] {
    return [...this.bookCategoryList]; 
  }

  addBook(book: string): void {
    this.bookCategoryList.unshift(book);
  }

  updateBook(index: number, updatedBook: string): void {
    if (index >= 0 && index < this.bookCategoryList.length) {
      this.bookCategoryList[index] = updatedBook;
    }
  }

  deleteBook(index: number): void {
    if (index >= 0 && index < this.bookCategoryList.length) {
      this.bookCategoryList.splice(index, 1);
    }
  }
}
