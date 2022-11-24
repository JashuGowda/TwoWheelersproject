import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import Swal from 'sweetalert2';
import { Users } from '../../../tables/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user=new Users();
  constructor(private ser:AdminserviceService,private r:Router) { }

  ngOnInit(): void {
  }
  register(){
    this.ser.Save(this.user).subscribe((data)=>{
      Swal.fire("User",'User Registered Successfully!!','success')
      this.r.navigate(['/login']);
    },
    error=>{
      console.log(error);
      alert("already exists");
    }
    
    )

}
cancel(){
  this.r.navigate(['/login'])

}

}
