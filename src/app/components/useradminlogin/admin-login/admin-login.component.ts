import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import Swal from 'sweetalert2';
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
    Swal.fire("Admin",'Login Successful','success')
    this.ser.AdminLogin(this.admin).subscribe((data)=>{ 
      this.r.navigate(['/dashboard']);
     },
    error=>{
      console.log(error);
      alert("Enter Valid Credential");
    })

  
  }

}
