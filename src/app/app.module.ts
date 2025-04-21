import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutPageModule } from './modules/about-page/about-page.module';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { ContactPageComponent } from './modules/contact-page/contact-page.component';

import {  ReactiveFormsModule } from '@angular/forms';
import { BooksPageComponent } from './modules/books-page/books-page.component';
import { BookCardComponent } from './modules/books-page/components/book-card/book-card.component';
import { BooksPageModule } from './modules/books-page/books-page.module';
import { HttpClientModule } from '@angular/common/http';
import { NewBooksComponent } from './modules/new-books/new-books.component';
import { NewBooksModule } from './modules/new-books/new-books.module';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
// import { MoreDetailsComponent } from './components/more-details/more-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToggleButtonComponent,
    ContactPageComponent,
    NewBooksComponent,
    // MoreDetailsComponent,
    // BooksPageComponent,
    // BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    AboutPageModule,
    BooksPageModule,
    ReactiveFormsModule,
    HttpClientModule,
    NewBooksModule,
    FormsModule,
    InfiniteScrollModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
