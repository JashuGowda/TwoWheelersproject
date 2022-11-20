import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookings } from '../components/bookings/bookings';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

  constructor(private http:HttpClient) { }

  bookingUrl:string='http://localhost:8080/order';

  // For Booking Module
 
    getbookingstatus():Observable<Bookings[]>{
       return this.http.get<Bookings[]>(this.bookingUrl);
    }
}
