import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookCardService } from './services/book-card.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {
  books: any[] = [];
  allBooks: any[] = [];
  filteredBooks: any[] = [];
  loading = false;
  noBooksFound = false;
  currentPage = 1;
  booksPerPage = 20;
  totalPages = 0;
  totalBooks = 0;
  searchText = 'mongodb';
  sortAscending = true;
  sortActive = false;
  selectedBookFilter: string = '';
  selectedBook: any = null;

  constructor(private bookcardService: BookCardService) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.loading = true;
    this.books = [];
    this.noBooksFound = false;
    this.totalPages = 0;

    this.bookcardService.getBooks(this.searchText, 1).subscribe(
      firstPage => {
        const totalBooksFromApi = parseInt(firstPage.total) || 0;
        const totalApiPages = Math.ceil(totalBooksFromApi / 10);
        const requests = [];

        for (let i = 1; i <= totalApiPages; i++) {
          requests.push(this.bookcardService.getBooks(this.searchText, i));
        }

        forkJoin(requests).subscribe(
          (responses: any[]) => {
            this.allBooks = responses
              .map(resp => resp.books || [])
              .reduce((acc, curr) => acc.concat(curr), []);
            this.applyFilters();
            this.loading = false;
          },
          error => {
            console.error('Failed to fetch all books:', error);
            this.loading = false;
            this.noBooksFound = true;
          }
        );
      },
      error => {
        console.error('Failed to fetch first page:', error);
        this.loading = false;
        this.noBooksFound = true;
      }
    );
  }

  applyFilters(): void {
    let books = [...this.allBooks];

    if (this.selectedBookFilter) {
      const keyword = this.selectedBookFilter.toLowerCase();
      books = books.filter(book =>
        (book.title && book.title.toLowerCase().includes(keyword)) ||
        (book.subtitle && book.subtitle.toLowerCase().includes(keyword))
      );
    }

    if (this.sortActive) {
      books.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', '')) || 0;
        const priceB = parseFloat(b.price.replace('$', '')) || 0;
        return this.sortAscending ? priceA - priceB : priceB - priceA;
      });
    }

    this.filteredBooks = books;
    this.totalBooks = books.length;
    this.totalPages = Math.ceil(this.totalBooks / this.booksPerPage);

    const start = (this.currentPage - 1) * this.booksPerPage;
    const end = start + this.booksPerPage;
    this.books = books.slice(start, end);

    this.noBooksFound = books.length === 0;
  }

  onSortByPrice(ascending: boolean): void {
    this.sortAscending = ascending;
    this.sortActive = true;
    this.applyFilters();
  }

  onBookFilterChange(selectedBook: string): void {
    this.selectedBookFilter = selectedBook.toLowerCase();
    this.currentPage = 1;
    this.applyFilters();
  }

  onSearchInput(inputText: string): void {
    this.selectedBookFilter = inputText.toLowerCase();
    this.currentPage = 1;
    this.applyFilters();
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.applyFilters();
  }

  getVisiblePages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  getTotalPages(): number {
    return this.totalPages;
  }

  openModal(book: any) {
    this.selectedBook = book;
  }

  closeModal() {
    this.selectedBook = null;
  }

  
}
