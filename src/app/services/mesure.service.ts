import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesureService {

  SERVER_URL:string="http://localhost:3000";
  constructor(private httpClient : HttpClient) { }


  addMesure(mesure:any){
    return this.httpClient.post<{message : string}>(this.SERVER_URL + '/api/addMesure', mesure)
  }

  getAllMesures( ){
    return this.httpClient.get<{mesures : any}>(this.SERVER_URL + '/api/AllMesures');
  }

  search(mesure:any){
<<<<<<< HEAD
    return this.httpClient.post<{mesures : any}>(this.SERVER_URL + '/api/search', mesure);
  }

 
=======
    return this.httpClient.post<{mesure : any}>(this.SERVER_URL + '/api/search', mesure);
  }


>>>>>>> 7f7e9144676971df746a7f8ebe959b830b5f26c2
}
