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

  getAllDemandes( ){
  return this.httpClient.get<{demandes : any}>(this.SERVER_URL + '/api/AllDemandes');
}

 getmyDemandes(idClient){
  return this.httpClient.get<{myDemandes : any}>(`${this.SERVER_URL + '/api/myDemandes'}/${idClient}`);
}

getDemandeId(demandeId){
  return this.httpClient.get<{demande: any}>(`${this.SERVER_URL +'/api/AllDemandes'}/${demandeId}`)
} 

deleteDemnde(idClient){
  return this.httpClient.delete<{message : string}>(`${this.SERVER_URL + '/api/myDemandes'}/${idClient}`)

}

updateDemande(demande: any){
  return this.httpClient.put<{message : string}>(`${this.SERVER_URL + '/api/AllDemandes'}/${demande._id}`, demande)
}


}
