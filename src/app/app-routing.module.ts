import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { AboutPageComponent } from './modules/about-page/about-page.component';
import { ContactPageComponent } from './modules/contact-page/contact-page.component';
import { BooksPageComponent } from './modules/books-page/books-page.component';
import { NewBooksComponent } from './modules/new-books/new-books.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'about ', component: AboutPageComponent },
  { path: 'books' , component: BooksPageComponent },
  { path: 'contactus', component: ContactPageComponent},
  { path: 'newbooks' , component: NewBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
