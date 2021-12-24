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


 
 login(userObj){ 
  return this.httpClient.post<{findedUser : any}>(this.loginURL, userObj);
   }
   
   getUsers(){
     return this.httpClient.get<{users: any}>(this.userURL)
   }
   
   getUserId(userId){
     return this.httpClient.get<{user: any}>(`${this.userURL}/${userId}`)
   } 
   deleteUser(userId){
     console.log("here in services deleteUSer");
     
     return this.httpClient.delete<{message: any}>(`${this.userURL}/${userId}`)
   }

    updateUser(user: any){
    return this.httpClient.put<{message : string}>(`${this.userURL}/${user._id}`, user)
  }




}





































