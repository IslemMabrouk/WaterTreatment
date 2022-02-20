import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewURL : string = "http://localhost:3000/api/rev";

  constructor(private httpClient : HttpClient) { }

 addReview(review:any){
   return this.httpClient.post<{message : string}>(this.reviewURL, review);
 }


}
