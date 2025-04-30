import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksPageRoutingModule } from './books-page-routing.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksPageComponent } from './books-page.component';
import { BookPageFiltersComponent } from './components/book-page-filters/book-page-filters.component';
import { FormsModule } from '@angular/forms';
import { AboutPageModule } from '../about-page/about-page.module';
import { AboutPageComponent } from '../about-page/about-page.component';
import { MoreDetailsComponent } from 'src/app/components/more-details/more-details.component';
import { CartModule } from '../cart/cart.module';


@NgModule({
  declarations: [
    BooksPageComponent,
    BookCardComponent,
    BookPageFiltersComponent,
    MoreDetailsComponent,
  ],
  imports: [
    CommonModule,
    BooksPageRoutingModule,
    FormsModule,
    AboutPageModule,
    CartModule
  ],
  exports: [
    BooksPageComponent,
    BookPageFiltersComponent,
    AboutPageComponent,
    MoreDetailsComponent
  ]
})
export class BooksPageModule { }
