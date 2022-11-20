import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { Bike } from 'src/app/components/bikes/table';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikedetails!:FormGroup;
  showAdd !: boolean;
  showUpdate !: boolean;
  table!: Bike[];
  bike:Bike=new Bike();
  p:number=1;
  searchfield!:string;

  constructor(private apiService:ServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.bikedetails=this.fb.group({
      id :new FormControl('',[Validators.required]),
      bikename :new FormControl('',[Validators.required]),
      bikenum :new FormControl('',[Validators.required]),
      bikevar :new FormControl('',[Validators.required]),
      modelyear :new FormControl('',[Validators.required]),
      price :new FormControl('',[Validators.required]),
      status :new FormControl('',[Validators.required]),
      createdon :new FormControl('',[Validators.required])
    })

  this.getbikeDetails();
  }
  get id(){
    return this.bikedetails.get('id');
  }
  get bikenum(){
    return this.bikedetails.get('bikenum');
  }
  get bikename(){
    return this.bikedetails.get('bikename');
  }
  get bikevar(){
    return this.bikedetails.get('bikevar');
  }
  get modelyear(){
    return this.bikedetails.get('modelyear');
  }
  get price(){
    return this.bikedetails.get('price');
  }
  get status(){
    return this.bikedetails.get('status');
  }
  get createdon(){
    return this.bikedetails.get('createdon');
  }
  clickAddbikes(){
    this.bikedetails.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  
 
  postbikeDetails(){
    this.bike.id=this.bikedetails.value.id;
    this.bike.bikenum=this.bikedetails.value.bikenum;
    this.bike.bikename=this.bikedetails.value.bikename;
    this.bike.bikevar=this.bikedetails.value.bikevar;
    this.bike.modelyear=this.bikedetails.value.modelyear;
    this.bike.price=this.bikedetails.value.price;
    this.bike.status=this.bikedetails.value.status;
    this.bike.createdon=this.bikedetails.value.createdon;

   this.apiService.addbike(this.bike).subscribe(
    data=>{this.bike=data;
      alert("Bike Add successfully") 
      let ref=document.getElementById('cancel')
      ref?.click();
      this.bikedetails.reset();
      this.getbikeDetails(); }
    ,error=>{console.log(error)
    alert("Bike number is already exist!")});
    this.bike = new Bike();

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

      deletebikedeatils(row:any){
        this.apiService.deletebike(row.id).subscribe(data=>{
          alert("You want to Delete this Bike?");
          this.bikedetails.reset();
          this.getbikeDetails(); 
      })

    }

    onEdit(row:any){
      this.showAdd=false;
      this.showUpdate=true;
      this.bike.id=row.id;
      this.bikedetails.controls['id'].setValue(row.id);
      this.bikedetails.controls['bikenum'].setValue(row.bikenum);
      this.bikedetails.controls['bikename'].setValue(row.bikename);
      this.bikedetails.controls['bikevar'].setValue(row.bikevar);
      this.bikedetails.controls['modelyear'].setValue(row.modelyear);
      this.bikedetails.controls['price'].setValue(row.price);
      this.bikedetails.controls['status'].setValue(row.status);
      this.bikedetails.controls['createdon'].setValue(row.createdon);
    }

    updateBikeDetails(){
      this.bike.id=this.bikedetails.value.id;
      this.bike.bikenum=this.bikedetails.value.bikenum;
      this.bike.bikename=this.bikedetails.value.bikename;
      this.bike.bikevar=this.bikedetails.value.bikevar;
      this.bike.modelyear=this.bikedetails.value.modelyear;
      this.bike.price=this.bikedetails.value.price;
      this.bike.status=this.bikedetails.value.status;
      this.bike.createdon=this.bikedetails.value.createdon;

      this.apiService.updatebike(this.bike).subscribe(
        data=>{this.bike=data;
          alert("Bike Updated successfully") 
          let ref=document.getElementById('cancel')
          ref?.click();
          this.bikedetails.reset();
          this.getbikeDetails(); }
      )

    }
  
    key = 'id';
    reverse:boolean=false;
    sort(key: string){
      this.key=key;
      this.reverse=!this.reverse;
    }
}


