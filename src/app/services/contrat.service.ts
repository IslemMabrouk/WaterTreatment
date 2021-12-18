import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
ContratURL:string="http://localhost:3000/api/contrat"
  
constructor(private httpClient :HttpClient ) { }


addContrat (contratObj){
  return this.httpClient.post<{message : string}>(this.ContratURL, contratObj);


}








}
