import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from './interfaces/posts';
import { StoreItem } from './interfaces/store-item';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private http: HttpClient) { } 
  test(): Observable<Posts> {
      return this.http.get<Posts>("https://jsonplaceholder.typicode.com/posts/1")
  }

  getAllItems(): Observable<StoreItem[]>{
    return this.http.get<StoreItem[]>("https://fakestoreapi.com/products")
  }
}
