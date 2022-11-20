import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reviews } from '../components/reviews/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor( private http:HttpClient) { }
  rurl:string='http://localhost:8080/addfeedback';

 
 addreviews(review:Reviews):Observable<Reviews>{
    return this.http.post<Reviews>(this.rurl,review);
 }
}
