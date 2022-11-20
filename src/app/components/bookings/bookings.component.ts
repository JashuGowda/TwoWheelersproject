
import { Component, OnInit } from '@angular/core';
import { BookingserviceService } from 'src/app/services/bookingservice.service';
import { Bookings } from './bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
bookings!:Bookings[];
p:number=1;
searchvalue!:string;

  constructor(private bs:BookingserviceService) { }

  ngOnInit(): void {
   this.bs.getbookingstatus().subscribe(
    data=>{
      this.bookings=data;
      console.log("Get successfully")
    },
    error=>{
      console.log(error);
    }
   );
  
  }

  key = 'id';
  reverse:boolean=false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }

}
