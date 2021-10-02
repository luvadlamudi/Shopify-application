import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from './interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private http: HttpClient) { } 
  test(): Observable<Posts> {
 return this.http.get<Posts>("https://jsonplaceholder.typicode.com/posts/1")
  }
}
