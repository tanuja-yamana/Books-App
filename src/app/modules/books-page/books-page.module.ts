import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksPageRoutingModule } from './books-page-routing.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksPageComponent } from './books-page.component';
import { BookPageFiltersComponent } from './components/book-page-filters/book-page-filters.component';


@NgModule({
  declarations: [
    BooksPageComponent,
    BookCardComponent,
    BookPageFiltersComponent
  ],
  imports: [
    CommonModule,
    BooksPageRoutingModule
  ],
  exports: [
    BooksPageComponent,
    BookPageFiltersComponent
  ]
})
export class BooksPageModule { }
