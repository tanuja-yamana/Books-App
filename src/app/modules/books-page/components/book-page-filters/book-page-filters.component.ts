import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-page-filters',
  templateUrl: './book-page-filters.component.html',
  styleUrls: ['./book-page-filters.component.scss']
})
export class BookPageFiltersComponent {
  sortAscending = true;
  searchInput: string = '';
  selectedBook: string = '';

  @Output() sortByPrice = new EventEmitter<boolean>();
  @Output() bookSelected = new EventEmitter<string>();
  @Output() searchKeyword = new EventEmitter<string>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  toggleSort(): void {
    this.sortAscending = !this.sortAscending;
    this.sortByPrice.emit(this.sortAscending);
  }

  onBookSelect(event: Event): void {
    this.selectedBook = (event.target as HTMLSelectElement).value;

    // Clear search input when dropdown is used
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

  onSearchClick(): void {
    this.searchKeyword.emit(this.searchInput);

    // Clear dropdown when search is used
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
}
