import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookCardService {
  private baseUrl = 'https://api.itbook.store/1.0/search';

  constructor(private http: HttpClient) {}

  getBooks(query: string, page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${query}/${page}`);
  }
}
