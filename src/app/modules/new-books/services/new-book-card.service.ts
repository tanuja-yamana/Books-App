import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewBookCardService {

  private apiUrl="https://api.itbook.store/1.0/new";
  constructor(private http: HttpClient) { }

  getBooks(): any {
    return this.http.get(this.apiUrl);
  }

}
