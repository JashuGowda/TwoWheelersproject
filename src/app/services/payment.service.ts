import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../components/payment/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  purl:string='http://localhost:8080/api/payments';

  addpayment(ptable:Payment):Observable<Payment>{
    return this.http.post<Payment>(this.purl,ptable);
  }
  getpayment():Observable<Payment>{
    return this.http.get<Payment>(this.purl);
  }
}
