import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../components/useradminlogin/admin-login/admin';
import { Users } from '../tables/user';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }
  AdminLogin(admin:Admin):Observable<Admin[]>{
    return this.http.post<Admin[]>("http://localhost:8080/login",admin);
      }
      Save(user:Users):Observable<Users[]>{
        return this.http.post<Users[]>("http://localhost:8080/register",user);
      }
      login(user1:Users):Observable<Users[]>{
        return this.http.post<Users[]>("http://localhost:8080/log",user1);
      
      }
  
}
