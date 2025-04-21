import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBooksRoutingModule } from './new-books-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BookCardComponent } from '../books-page/components/book-card/book-card.component';
import { BooksPageComponent } from '../books-page/books-page.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    NewBooksRoutingModule,
    InfiniteScrollModule

  ],
  exports: [

  ]
})
export class NewBooksModule { }
