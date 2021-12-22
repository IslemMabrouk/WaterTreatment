import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios, { Axios } from 'axios';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 userURL: string = "http://localhost:3000/api/users";
 loginURL: string = "http://localhost:3000/api/login";
  
 constructor(private httpClient : HttpClient ) { }

 addUser(userObj){ 
return this.httpClient.post<{message : string}>(this.userURL, userObj);
 }

 
 public getUsers(){
  return this.httpClient.get<{users : any}>(this.userURL);
}

 
 login(userObj){ 
  return this.httpClient.post<{findedUser : any}>(this.loginURL, userObj);
   }
   



}





































