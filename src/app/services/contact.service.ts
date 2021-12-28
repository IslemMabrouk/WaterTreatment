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

<<<<<<< HEAD
  contactsAll (){
    return this.httpClient.get<{contacts:any}> (this.SERVER_URL + '/api/contactCons')
  }
=======
>>>>>>> 7f7e9144676971df746a7f8ebe959b830b5f26c2
  getmyContacts(idClient){
    return this.httpClient.get<{myContacts : any}>(`${this.SERVER_URL + '/api/mycontact'}/${idClient}`);
  
  }

  getContactId(contactId){
    return this.httpClient.get<{contact : any}>(`${this.SERVER_URL + '/api/Contact'}/${contactId}`);
  }

  deleteMyContact(idClient){
    return this.httpClient.delete<{message : string}>(`${this.SERVER_URL + '/api/mycontact'}/${idClient}`)
  
  }
  
   updateContact(contact: any){
    return this.httpClient.put<{message : string}>(`${this.SERVER_URL + '/api/mycontact'}/${contact._id}`,contact)
  }

}
