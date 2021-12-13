import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  SERVER_URL:string="http://localhost:3000";

  constructor(private httpClient : HttpClient) { }



  public getProducts(){
    return this.httpClient.get<{products : any}>(this.SERVER_URL + '/api/allProducts');
  }

  public getProduct(productId){
    return this.httpClient.get<{product : any}>(`${this.SERVER_URL + '/api/allProducts'}/${productId}`);
  }

//:::::::::::Adoucisseur service:::::::::::::::::://

  addAdoucisseur(product:any, img : File){
    let formData = new FormData();
    formData.append('type', product.type);
    formData.append('price', product.price);
    formData.append('volume', product.volume);
    formData.append('pression', product.pression);
    formData.append('economie', product.economie);
    formData.append('conception', product.conception);
    formData.append('role', product.role);
    formData.append('img', img);

    
    return this.httpClient.post<{message : string}>(this.SERVER_URL + '/api/addProduct', formData)
}


//:::::::::::Purificateur service:::::::::::::::::://

addPurificateur(product:any, img : File){
  let formData = new FormData();
  formData.append('type', product.type);
  formData.append('price', product.price);
  formData.append('chlore', product.chlore);
  formData.append('role', product.role);
  formData.append('img', img);
 
  
  return this.httpClient.post<{message : string}>(this.SERVER_URL + '/api/addProduct', formData)
}

public login(product:any){
  return this.httpClient.post<{findedProduct : any}>(this.SERVER_URL + '/api/login', product);
}

public deleteProduct(productId){
  return this.httpClient.delete<{message : string}>(`${this.SERVER_URL + '/api/allProducts'}/${productId}`)
}

public updateProduct(product: any){
  return this.httpClient.put<{message : string}>(`${this.SERVER_URL + '/api/allProducts'}/${product._id}`,product)
}


}
