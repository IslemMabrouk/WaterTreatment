import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { DemandeService } from 'src/app/services/demande.service';
import { ProductService } from 'src/app/services/product.service';




@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})



export class EspaceClientComponent implements OnInit { 
  displayedColumns=['validation', 'idProduct', 'etat', 'actions'];
  connectedUser:any;
  demandes:any;
  myDemande:any=[];
  myContacts:any=[];
  products:any;
  id:any;
  product:any;
  rdv:any=false;
  dmd:any=false;

  constructor(private demandeService : DemandeService,
              private productService : ProductService,
              private contactService : ContactService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
 
    this.productService.getProdcut(this.id).subscribe(
      (data) =>{
        this.product = data.product;
        console.log(this.product);

      }
    )

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log(this.connectedUser);

    this.demandeService.getmyDemandes(this.connectedUser._id).subscribe(
      (data)=>{
    this.myDemande = data.myDemandes;
    console.log(this.myDemande);
    
    if (this.myDemande.length==0) {
      this.dmd = this.dmd;      
    }else{
      this.dmd = !this.dmd;      
    }

      })

  // this.productService.getAllProducts().subscribe(
  //   (data) => {
  //     console.log('Here data from BE');
  //     this.products=data.products;
      
  //   })

    this.contactService.getmyContacts(this.connectedUser._id).subscribe(
      (data) => {
        console.log('Here data from BE');
        this.myContacts= data.myContacts;
        
        if (this.myContacts.length==0) {
          this.rdv = this.rdv;      
        }else{
          this.rdv = !this.rdv;      
        }
  

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
