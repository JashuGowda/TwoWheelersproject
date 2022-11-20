export class Payment{
    id:number=0;
    cardno:string="";
    nameoncard:string="";
    amount:number=0;
    cvv:number=0;
    pmtdate!:Date;
    paymentmethod:string="";
    exmonth:number=0;
    exyear:number=0;
}