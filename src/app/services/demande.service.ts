import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  SERVER_URL:string="http://localhost:3000";

  constructor(private httpClient : HttpClient) { }

 

  valider(demande:any){
    return this.httpClient.post<{message : string}>(this.SERVER_URL + '/api/demande', demande)
  }  
}
