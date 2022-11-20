import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../components/feedback/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }
   furl:string='http://localhost:8080/addfeedback/';

   getfeedback():Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.furl);
  }
  deletefeedback(id:number):Observable<any>{
    return this.http.delete<any>(this.furl+id);
  }
}