import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { Admin } from './admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin=new  Admin();
  constructor(private ser:AdminserviceService,private r:Router) { }

  ngOnInit(): void {
  }
  adminlog(admin:Admin): void{
    this.ser.AdminLogin(this.admin).subscribe((data)=>{
      this.r.navigate(['/dashboard']);
      console.log("success");
     },
    error=>{
      console.log(error);
      alert("Enter Valid Credential");
    })

  
  }

}
