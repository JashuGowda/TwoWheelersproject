import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/tables/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  utable!:Users[];
  p:number=1;
  searchvalue!:string;

  constructor(private us:UsersService) { }

  ngOnInit(): void {
   this.getAllUsers();
  }
   
  getAllUsers(){
    this.us.getuserdetails().subscribe(
      data=>{
        this.utable=data;
        console.log("Get successfully")
      },
      error=>{
        console.log(error);
      });
  }
  
  key = 'id';
  reverse:boolean=false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }

}
