import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesureService {

  Mesure_URL: string = "http://localhost:3000/api/mesure";
  Search_URL:string="http://localhost:3000/api/search";

  constructor(private httpClient : HttpClient) { }


  addMesure(mesure:any){
    return this.httpClient.post<{message : string}>(this.Mesure_URL, mesure)
  }

  getAllMesures( ){
    return this.httpClient.get<{mesures : any}>(this.Mesure_URL);
  }

  search(mesure:any){
    return this.httpClient.post<{mesure : any}>(this.Search_URL, mesure);
  }

  deleteMesure(mesureID){
    return this.httpClient.delete<{message : string}>(`${this.Mesure_URL}/${mesureID}`)
  }

  updateMesure(mesure:any){
   return this.httpClient.put<{message : string}>(`${this.Mesure_URL}/${mesure._id}`,mesure)
  }

  getmesureId(mesureId){
    return this.httpClient.get<{mesure : string}>(`${this.Mesure_URL}/${mesureId}`)
  }

}
