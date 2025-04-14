import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutPageModule } from './modules/about-page/about-page.module';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { ContactPageComponent } from './modules/contact-page/contact-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksPageComponent } from './modules/books-page/books-page.component';
import { BookCardComponent } from './modules/books-page/components/book-card/book-card.component';
import { BooksPageModule } from './modules/books-page/books-page.module';
import { HttpClientModule } from '@angular/common/http';
import { NewBooksComponent } from './modules/new-books/new-books.component';
import { NewBooksModule } from './modules/new-books/new-books.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToggleButtonComponent,
    ContactPageComponent,
    NewBooksComponent,
    // BooksPageComponent,
    // BookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    AboutPageModule,
    BooksPageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NewBooksModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
