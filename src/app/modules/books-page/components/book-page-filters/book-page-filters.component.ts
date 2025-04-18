import { Component, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookListService } from 'src/app/book-list.service';

@Component({
  selector: 'app-book-page-filters',
  templateUrl: './book-page-filters.component.html',
  styleUrls: ['./book-page-filters.component.scss']
})
export class BookPageFiltersComponent {
  @Output() sortByPrice = new EventEmitter<boolean>();
  @Output() bookSelected = new EventEmitter<string>();
  @Output() searchKeyword = new EventEmitter<string>();

  selectedBook: string = '';
  sortAscending = false;
  searchInput: string = '';

  bookList: string[] = [
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookListService: BookListService) {}
ngOnInit(): void{
  this.bookList = this.bookListService.getBooks();
}
  toggleSort(): void {
    this.sortAscending = !this.sortAscending;
    this.sortByPrice.emit(this.sortAscending);
  }

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
}
