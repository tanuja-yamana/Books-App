import { Component, OnInit } from '@angular/core';
import { BookCardService } from './services/book-card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  books: any[] = [];
  paginatedBooks: any[] = [];
  selectedBook: string = '';
  searchText: string = '';
  noBooksFound: boolean = false;
  loading: boolean = false;
  sortAscending: boolean = false;
  currentPage: number = 1;
  booksPerPage: number = 10;
  totalPages: number = 0;
  paginationWindowStart: number = 1;
  pagesToShow: number = 5;

  constructor(
    private bookcardService: BookCardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['search'] || '';
      this.selectedBook = params['book'] || '';

      if (this.searchText) {
        this.fetchBooks(this.searchText);
      } else if (this.selectedBook) {
        this.fetchBooks(this.selectedBook);
      } else {
        this.fetchAllBooks();
      }
    });
  }

  onBookSelected(bookTitle: string): void {
    this.resetState();
    this.selectedBook = bookTitle;
    const queryParams = bookTitle.trim() ? { book: bookTitle, search: null } : {};
    this.router.navigate(['/books'], { queryParams });
    bookTitle.trim() ? this.fetchBooks(bookTitle) : this.fetchAllBooks();
  }

  onSearchChanged(query: string): void {
    this.resetState();
    this.searchText = query.trim();
    const queryParams = this.searchText ? { search: this.searchText, book: null } : {};
    this.router.navigate(['/books'], { queryParams });
    this.searchText ? this.fetchBooks(this.searchText) : this.fetchAllBooks();
  }

  fetchAllBooks(): void {
    this.loading = true;
    this.bookcardService.fetchAllBooks('mongodb').subscribe(
      (data: any) => {
        this.books = data;
        this.finishBookLoading();
      },
      () => this.handleError()
    );
  }

  fetchBooks(query: string): void {
    if (!query.trim()) return;
    this.loading = true;
    this.bookcardService.getAllBooks(query).subscribe(
      (data: any) => {
        const lowerQuery = query.toLowerCase();
        const filtered = (data || []).filter((b: any) =>
          b.title.toLowerCase().includes(lowerQuery)
        );
        const seen = new Set();
        this.books = filtered.filter((b: any) => {
          const title = b.title.toLowerCase();
          if (seen.has(title)) return false;
          seen.add(title);
          return true;
        });
        this.finishBookLoading();
      },
      () => this.handleError()
    );
  }

  finishBookLoading(): void {
    this.totalPages = Math.ceil(this.books.length / this.booksPerPage);
    this.currentPage = 1;
    this.paginationWindowStart = 1;
    this.updatePaginatedBooks();
    this.noBooksFound = this.books.length === 0;
    this.loading = false;
  }

  updatePaginatedBooks(): void {
    const start = (this.currentPage - 1) * this.booksPerPage;
    this.paginatedBooks = this.books.slice(start, start + this.booksPerPage);
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePaginatedBooks();
    this.updatePaginationWindow();
  }

  updatePaginationWindow(): void {
    this.paginationWindowStart = Math.floor((this.currentPage - 1) / this.pagesToShow) * this.pagesToShow + 1;
  }

  getVisiblePages(): number[] {
    const end = Math.min(this.paginationWindowStart + this.pagesToShow - 1, this.totalPages);
    let visiblePages = [];
    for (let i = this.paginationWindowStart; i <= end; i++) {
      visiblePages.push(i);
    }
    return visiblePages;
  }

  onSortChanged(ascending: boolean): void {
    this.sortAscending = ascending;
    this.books.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));
      return ascending ? priceA - priceB : priceB - priceA;
    });
    this.updatePaginatedBooks();
  }

  private resetState(): void {
    this.books = [];
    this.paginatedBooks = [];
    this.currentPage = 1;
    this.totalPages = 0;
    this.noBooksFound = false;
    this.loading = true;
  }

  private handleError(): void {
    this.books = [];
    this.noBooksFound = true;
    this.loading = false;
  }
}
