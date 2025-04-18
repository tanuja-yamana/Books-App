import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBooksRoutingModule } from './new-books-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


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
