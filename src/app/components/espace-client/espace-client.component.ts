import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  products:any;

  constructor(private demandeService : DemandeService,
              private productService : ProductService) { }

  ngOnInit() {

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log(this.connectedUser);

    this.demandeService.getmyDemandes(this.connectedUser._id).subscribe(
      (data)=>{
    this.myDemande = data.myDemandes
      })

  //  this.demandeService.getAllDemandes().subscribe(
  //     (data)=>{
  //       this.demandes = data.demandes;
  //     console.log( this.demandes);

  //       for (let i = 0; i < this.demandes.length; i++) {  
  //         if (this.demandes[i].idClient == this.connectedUser._id) {
            
  //           this.myDemande.push(this.demandes[i]);
  //           console.log(this.myDemande);
            
  //         }
          
  //       }  
        
  //     }
  //   )


  this.productService.getAllProducts().subscribe(
    (data) => {
      console.log('Here data from BE');
      this.products=data.products;
      
    }
  )



  }

}
