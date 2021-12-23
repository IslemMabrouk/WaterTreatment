import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httClient : HttpClient) { }


  sendMessage(body){
    let headers = {
      headers : new HttpHeaders({
        'Content-Type' :'application/json'
      })
    }
    return this.httClient.post("http://localhost:3000/email",body,headers);
  }

}
