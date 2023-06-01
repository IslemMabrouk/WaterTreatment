import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'] ,
  encapsulation: ViewEncapsulation.Emulated

})
export class ReviewsComponent implements OnInit {

  @Input('rating') rating: number = 3;
  @Input('starCount') starCount: number = 5;
  @Input('color')  color: string = 'accent';
  @Output()  ratingUpdated = new EventEmitter();

  
  snackBarDuration: number = 2000;
  ratingArr = [];

  addReviewForm : UntypedFormGroup;
  review : any = {};

  constructor( private snackBar: MatSnackBar,
               private fb : UntypedFormBuilder,
               private revService : ReviewService) { }

  ngOnInit(): void {
    this.addReviewForm = this.fb.group({
      avis : [''],
      idClient : [''],
      time : [''],
      rate : [''],
    });

   console.log("a "+this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating:number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }
  
  addReview(){
  
    console.log('add');
    this.review.rate = this.rating;
    console.log(this.rating);
    
   this.revService.addReview(this.review).subscribe(
     (data) => {
       console.log(data.message); 
     });

     
  }
 
  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

 


}


export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
