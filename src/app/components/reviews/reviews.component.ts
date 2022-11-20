import { Component, OnInit } from '@angular/core';
import { Reviews } from './review';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviewform!:FormGroup;
  reviewtable:Reviews[]=[];
  review:Reviews=new Reviews;
  
  constructor(private fb:FormBuilder,private rs:ReviewsService) { }

  ngOnInit(): void {
    this.reviewform=this.fb.group({
      id :[''],
      name :[''],
      bikeName:new FormControl('',[Validators.required]),
      bikeNum:new FormControl('',[Validators.required]),
      ratings :[''],
      reviews:new FormControl('',[Validators.required])
    })
  }
  get bikeName(){
    return this.reviewform.get('bikeName');
  }
  get bikeNum(){
    return this.reviewform.get('bikeNum');
  }
  get reviews(){
    return this.reviewform.get('reviews');
  }

  addreviews(){
    this.review.id=this.reviewform.value.id;
    this.review.name=this.reviewform.value.name;
    this.review.bikeName=this.reviewform.value.bikeName;
    this.review.bikeNum=this.reviewform.value.bikeNum;
    this.review.ratings=this.reviewform.value.ratings;
    this.review.reviews=this.reviewform.value.reviews;

    this.rs.addreviews(this.review).subscribe(
      data=>{this.review=data;
        alert("Thank you for your valid feedback!") 
        let ref=document.getElementById('cancel')
        ref?.click();
        this.reviewform.reset(); }
      ,error=>{console.log(error)});
      this.review = new Reviews();
  
  }
}
