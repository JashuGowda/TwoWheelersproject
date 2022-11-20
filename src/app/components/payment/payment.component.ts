import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from './payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  registrationForm! :FormGroup;
  ptable:Payment[]=[];
  pay:Payment=new Payment();
  constructor(private fb:FormBuilder,private as:PaymentService) {
   }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      id:new FormControl ('',[Validators.required]),
      cardno:new FormControl ('',[Validators.required]),
      nameoncard:new FormControl ('',[Validators.required]),
      amount:new FormControl ('',[Validators.required]),
      cvv:new FormControl ('',[Validators.required]),
      pmtdate!:new FormControl ('',[Validators.required]),
      paymentmethod:new FormControl ('',[Validators.required]),
      exmonth:new FormControl ('',[Validators.required]),
      exyear:new FormControl ('',[Validators.required])

    });
  }
  get id(){
    return this.registrationForm.get('id');
   }
   get cardno(){
    return this.registrationForm.get('cardno');
   }
   get nameoncard(){
    return this.registrationForm.get('nameoncard');
   }
   get amount(){
    return this.registrationForm.get('amount');
   }
   get cvv(){
    return this.registrationForm.get('cvv');
   }
   get pmtdate(){
    return this.registrationForm.get('pmtdate');
   }
   get paymentmethod(){
    return this.registrationForm.get('id');
   }
   get exmonth(){
    return this.registrationForm.get('exmonth');
   }
   get exyear(){
    return this.registrationForm.get('exyear');
   }
   makepayment(){ 

    this.pay.id=this.registrationForm.value.id;

    this.pay.cardno=this.registrationForm.value.cardno;

    this.pay.nameoncard=this.registrationForm.value.nameoncard;

    this.pay.amount=this.registrationForm.value.amount;

    this.pay.cvv=this.registrationForm.value.cvv;

    this.pay.pmtdate=this.registrationForm.value.pmtdate;

    this.pay.paymentmethod=this.registrationForm.value.paymentmethod;

    this.pay.exmonth=this.registrationForm.value.exmonth;

    this.pay.exyear=this.registrationForm.value.exyear;
    

    this.as.addpayment(this.pay).subscribe(
       data=>{
        this.pay=data;
        alert("Payment Added Successfully")
       this.registrationForm.reset(); }
       ,error=>{console.log(error)
        alert("Something wrong!!")
        this.pay=new Payment();});
      }

}
