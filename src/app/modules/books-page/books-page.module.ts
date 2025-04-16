import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksPageRoutingModule } from './books-page-routing.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksPageComponent } from './books-page.component';
import { BookPageFiltersComponent } from './components/book-page-filters/book-page-filters.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BooksPageComponent,
    BookCardComponent,
    BookPageFiltersComponent
  ],
  imports: [
    CommonModule,
    BooksPageRoutingModule,
    FormsModule
  ],
  exports: [
    BooksPageComponent,
    BookPageFiltersComponent
  ]
})
export class BooksPageModule { }
