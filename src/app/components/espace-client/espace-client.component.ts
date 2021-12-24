import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { DemandeService } from 'src/app/services/demande.service';
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})



export class EspaceClientComponent implements OnInit { 
  displayedColumns=['validation', 'idProduct', 'etat'];
  connectedUser:any;
  demandes:any;
  myDemande:any=[];
  myContacts:any=[];
  products:any;

  constructor(private demandeService : DemandeService,
              private productService : ProductService,
              private contactService : ContactService,
              private router : Router) { }

  ngOnInit() {

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log(this.connectedUser);

    this.demandeService.getmyDemandes(this.connectedUser._id).subscribe(
      (data)=>{
    this.myDemande = data.myDemandes
      })

  this.productService.getAllProducts().subscribe(
    (data) => {
      console.log('Here data from BE');
      this.products=data.products;
      
    })

    this.contactService.getmyContacts(this.connectedUser._id).subscribe(
      (data) => {
        console.log('Here data from BE');
        this.myContacts= data.myContacts;
        
      })





  }



  deleteDemande(id:any){
    this.demandeService.deleteDemnde(id).subscribe(
(data)=> {
  console.log(data.message);
  
  //Refresh Table without Reloading
  this.demandeService.getmyDemandes(this.connectedUser._id).subscribe(
    (data)=>{
      this.myDemande= data.myDemandes
    })
}

    ) }


    deleteMyContact(id:any){

      this.contactService.deleteMyContact(id).subscribe(
        (data)=> {
          console.log(data.message);
          
          //Refresh Table without Reloading
          this.contactService.getmyContacts(this.connectedUser._id).subscribe(
            (data)=>{
              this.myContacts= data.myContacts
            }
          )

    })
  }

  editMyContact(id:any){
    this.router.navigate([`editContact/${id}`]);
  }
  
  


}
