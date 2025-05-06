import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookListService } from 'src/app/services/book-list.service';

@Component({
  selector: 'app-book-page-filters',
  templateUrl: './book-page-filters.component.html',
  styleUrls: ['./book-page-filters.component.scss']
})
export class BookPageFiltersComponent implements OnInit, OnDestroy {
  @Output() sortByPrice = new EventEmitter<boolean>();
  @Output() bookSelected = new EventEmitter<string>();
  @Output() searchKeyword = new EventEmitter<string>();

  selectedBook: string = '';
  sortAscending = false;
  searchInput: string = '';
  bookCategoryList: string[] = [];



  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookListService: BookListService) { }
  ngOnInit(): void {
    this.bookCategoryList = this.bookListService.getBooks();
  }
  toggleSort(): void {
    this.sortAscending = !this.sortAscending;
    this.sortByPrice.emit(this.sortAscending);
  }

  //selecting book
  onBookSelect(event: Event): void {
    this.selectedBook = (event.target as HTMLSelectElement).value;
    this.searchInput = '';
    this.bookSelected.emit(this.selectedBook);
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        book: this.selectedBook || null,
        search: null,
      },
      queryParamsHandling: 'merge',
    });
  }

  // Searching book
  onSearchClick(): void {
    this.searchKeyword.emit(this.searchInput);
    this.selectedBook = '';
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        search: this.searchInput || null,
        book: null,
      },
      queryParamsHandling: 'merge',
    });
  }

  ngOnDestroy(): void {
    this.selectedBook = '';
    this.searchInput = '';
    this.bookCategoryList = [];
    this.sortAscending = false;
  }

}
