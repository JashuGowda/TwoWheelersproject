import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../tables/user';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  userUrl:string='http://localhost:8080/getuser';

  getuserdetails():Observable<Users[]>{
    return this.http.get<Users[]>(this.userUrl);
 }
}
