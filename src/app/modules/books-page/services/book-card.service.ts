import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookCardService {

  private baseUrl = "https://api.itbook.store/1.0/search";

  constructor(private http: HttpClient) {}

  getBooksByPage(query: string, page: number): Observable<any> {
    const url = `${this.baseUrl}/${query}/${page}`;
    return this.http.get<any>(url);
  }

  getAllBooks(query: string): Observable<any> {
    return new Observable(observer => {
      let allBooks: any[] = [];
      let page = 1;
      const fetchPage = () => {
        const url = `${this.baseUrl}/${query}/${page}`;
        this.http.get<any>(url).subscribe(data => {
          if (data.books && data.books.length > 0) {
            allBooks = [...allBooks, ...data.books];
            if (page * 10 < +data.total) {
              page++;
              fetchPage();
            } else {
              observer.next(allBooks);
              observer.complete();
            }
          } else {
            observer.next(allBooks);
            observer.complete();
          }
        }, err => observer.error(err));
      };
      fetchPage();
    });
  }

  // New method for fetching books and handling pagination
  fetchAllBooks(query: string): Observable<any[]> {
    return new Observable(observer => {
      let allBooks: any[] = [];
      let page = 1;
      const fetchPage = () => {
        this.getBooksByPage(query, page).subscribe(data => {
          if (data.books?.length) {
            allBooks.push(...data.books);
            if (page * 10 < +data.total) {
              page++;
              fetchPage();
            } else {
              observer.next(allBooks);
              observer.complete();
            }
          } else {
            observer.next(allBooks);
            observer.complete();
          }
        }, err => observer.error(err));
      };
      fetchPage();
    });
  }
}
