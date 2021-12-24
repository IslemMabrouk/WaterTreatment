import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  SERVER_URL:string="http://localhost:3000";

  constructor( private httpClient : HttpClient) { }


  contacter(contact:any){
    return this.httpClient.post<{message : any;}>(this.SERVER_URL + '/api/contactCons/', contact)
  }

  contactsAll (){
    return this.httpClient.get<{contacts:any}> (this.SERVER_URL + '/api/contactCons')
  }
}
