import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-page-filters',
  templateUrl: './book-page-filters.component.html',
  styleUrls: ['./book-page-filters.component.scss']
})
export class BookPageFiltersComponent {
  @Input() books: any[] = [];
  @Input() selectedBook = '';
  @Input() searchText = '';

  @Output() sortChanged = new EventEmitter<boolean>();
  @Output() bookSelected = new EventEmitter<string>();
  @Output() searchChanged = new EventEmitter<string>();

  sortAscending = true;

  // Function to sort books in ascending order
  sortAscendingOrder() {
    if (!this.sortAscending) {
      this.sortAscending = true;
      this.sortChanged.emit(this.sortAscending);
    }
  }

  // Function to sort books in descending order
  sortDescendingOrder() {
    if (this.sortAscending) {
      this.sortAscending = false;
      this.sortChanged.emit(this.sortAscending);
    }
  }

  onBookSelect(event: Event): void {
    const value = (event.target as HTMLSelectElement).value || '';
    if (value) this.searchChanged.emit('');
    this.bookSelected.emit(value);
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value.trim();
    if (value) this.bookSelected.emit('');
    this.searchChanged.emit(value);
  }
}
