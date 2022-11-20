import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookbikeService } from 'src/app/services/bookbike.service';
import { ServiceService } from 'src/app/services/service.service';
import { Bike } from '../bikes/table';
import { Bookbike } from './bookbike';

@Component({
  selector: 'app-bookbike',
  templateUrl: './bookbike.component.html',
  styleUrls: ['./bookbike.component.css']
})
export class BookbikeComponent implements OnInit {
 p:number=1;
 table!:Bike[];
 bookbike!:Bookbike[];
 book:Bookbike=new Bookbike();
 registredForm! :FormGroup;
 searchfield!:string;


  constructor(private fb:FormBuilder,private apiService:ServiceService,private bb:BookbikeService,private r:Router) { }

  ngOnInit(): void {
    this.registredForm=this.fb.group({
      id:new FormControl('',[Validators.required]),
      bikename:new FormControl('',[Validators.required]),
      bikenum:new FormControl('',[Validators.required]),
      fromdate:new FormControl('',[Validators.required]),
      todate:new FormControl('',[Validators.required]),
      uname:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      advanceamount:new FormControl('',[Validators.required])
  });
  this.getbikeDetails();
  }
  get id(){
     return this.registredForm.get('id');
  }
  get bikename(){
    return this.registredForm.get('bikename');
  }
  get bikenum(){
    return this.registredForm.get('bikenum');
  }
  get fromdate(){
    return this.registredForm.get('fromdate');
  }
  get todate(){
    return this.registredForm.get('todate');
  }
  get uname(){
    return this.registredForm.get('uname');
  }
  get phone(){
    return this.registredForm.get('phone');
  }
  get gender(){
    return this.registredForm.get('gender');
  }
  get advanceamount(){
    return this.registredForm.get('advanceamount');
  }
  
  postbookDetails(){ 
    this.book.id=this.registredForm.value.id;
    this.book.bikename=this.registredForm.value.bikename;
    this.book.bikenum=this.registredForm.value.bikenum;
    this.book.fromdate=this.registredForm.value.fromdate;
    this.book.todate=this.registredForm.value.todate;
    this.book.uname=this.registredForm.value.uname;
    this.book.phone=this.registredForm.value.phone;
    this.book.gender=this.registredForm.value.gender;
    this.book.advanceamount=this.registredForm.value.advanceamount;

    this.bb.addbooking(this.book).subscribe(
      data=>{this.book=data;
        alert("Make payment now!") 
        let ref=document.getElementById('cancel')
        ref?.click();
        this.r.navigate(['/payment']);
        this.registredForm.reset(); }
      ,error=>{console.log(error)
      alert("Something wrong!!")
      this.book=new Bookbike();});
  }
  
  key = 'id';
  reverse:boolean=false;
  sort(key: string){
    this.key=key;
    this.reverse=!this.reverse;
  }
  getbikeDetails(){
    this.apiService.getbikes().subscribe(
      data=>{
        this.table=data;
        console.log("Get successfully")
      },
      error=>{
        console.log(error);
      }
    )
  }
 
  
}
