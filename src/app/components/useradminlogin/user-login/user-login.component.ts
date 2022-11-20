import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { Users } from '../../../tables/user';





@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user=new Users();
  constructor(private ser:AdminserviceService,private r:Router) { }

  ngOnInit(): void {
  }
  login(user:Users): void{
    this.ser.login(this.user).subscribe((data)=>{
      this.r.navigate(['/userdashboard']);
     },
    error=>{
      console.log(error);
      alert("Enter username and password")
      this.r.navigate(['/login']);
    })

  
  }

}
