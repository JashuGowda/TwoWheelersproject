import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Bike } from '../components/bikes/table';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private http:HttpClient) {}
  apiUrl:string='http://localhost:8080/api/bk/';
 

//   For Bike Module 
  
   getbikes():Observable<Bike[]>{
      return this.http.get<Bike[]>(this.apiUrl);
   }
   addbike(bike:Bike):Observable<Bike>{
      return this.http.post<Bike>(this.apiUrl,bike);
   }
   deletebike(id:number):Observable<any>{
    return this.http.delete<any>(this.apiUrl+id);
   }
   updatebike(bike:Bike):Observable<Bike>{
    return this.http.put<Bike>(this.apiUrl,bike);

   }

  

}
   





