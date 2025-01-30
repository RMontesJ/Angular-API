import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://dummyjson.com/products';
  private baseUrl2 = 'https://dummyjson.com';
  constructor(private http:HttpClient) { }
  getPosts(): Observable<any[]>{
    return this.http.get<any[]>(`${(this.baseUrl)}/posts`);
  }

  getPhotos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl2}/products`);
  }
}
