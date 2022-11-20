import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from './feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  p:number=1;
  ftable:Feedback[]=[];
  constructor(private fs:FeedbackService) { }

  ngOnInit(): void {
    this.getallfeedback();
  }
  deletereview(row:any){
      this.fs.deletefeedback(row.id)
      .subscribe(data=>{
        this.ftable=data;
        alert("You want to Delete this feedback?");
        this.getallfeedback(); 
    })

  }
  getallfeedback(){
    this.fs.getfeedback().subscribe(
      data=>{
        this.ftable=data;
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
