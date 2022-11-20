import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookbike } from '../components/bookbike/bookbike';

@Injectable({
  providedIn: 'root'
})
export class BookbikeService {

  constructor(private http:HttpClient) { }
  burl : string='http://localhost:8080/order';

  getbookingstatus():Observable<Bookbike[]>{
    return this.http.get<Bookbike[]>(this.burl);
 }
 addbooking(book:Bookbike):Observable<Bookbike>{
  return this.http.post<Bookbike>(this.burl, book);
}
}
