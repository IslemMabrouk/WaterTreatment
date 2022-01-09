import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  SERVER_URL:string="http://localhost:3000";

  constructor(private httpClient : HttpClient) { }


  getAllProducts(){
    return this.httpClient.get<{products : any}>(this.SERVER_URL + '/api/allProducts')
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
    formData.append('description', product.description);
    formData.append('role', product.role);
    formData.append('img', img);

    
    return this.httpClient.post<{message : string}>(this.SERVER_URL + '/api/addProduct', formData)
}


//:::::::::::Purificateur service:::::::::::::::::://

addPurificateur(product:any, img : File){
  let formData = new FormData();
  formData.append('type', product.type);
  formData.append('price', product.price);
  formData.append('list', product.list);
  formData.append('description', product.description);
  formData.append('role', product.role);
  formData.append('img', img);
 
  
  return this.httpClient.post<{message : string}>(this.SERVER_URL + '/api/addProduct', formData)
}

getProdcut(productID){
  return this.httpClient.get<{product:any}>(`${this.SERVER_URL + '/api/allProducts'}/${productID}`);

}
editProduct(product:any){
  return this.httpClient.put<{message:string}>(`${this.SERVER_URL + '/api/allProducts'}/${product._id}`,product)
}

deleteProduct(productId){
  return this.httpClient.delete<{message:any}>(`${this.SERVER_URL + '/api/allProducts'}/${productId}`)
}

}
