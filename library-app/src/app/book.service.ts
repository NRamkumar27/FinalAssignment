// src/app/book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:5000/api/books'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl);
    console.log ("working");
  }

  createBook(newBook: { title: string, author: string, year: number }): Observable<any> {
    return this.http.post(this.apiUrl, newBook);
  }
}