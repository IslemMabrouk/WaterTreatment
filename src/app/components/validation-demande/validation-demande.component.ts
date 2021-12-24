import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-validation-demande',
  templateUrl: './validation-demande.component.html',
  styleUrls: ['./validation-demande.component.css']
})
export class ValidationDemandeComponent implements OnInit {
  id:any;
  product:any;
  list:any;
  connectedUser:any;
  _demande:any;
  demande:any={};
  devis:any;
  validationForm:FormGroup;

  constructor(private productService : ProductService,
              private demandeService :DemandeService,
              private activatedRoute : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder) {
                let URL = this.router.url;
                let URL_demande = URL.split('/');
                this._demande = URL_demande[2];
                console.log(this._demande);
                
               }

  ngOnInit(): void {

    this.validationForm = this.formBuilder.group({
      idClient : [''],
      client : [''],
      idProduct : [''],
      product : [''],
      validation : [''],
      etat : ['']
    
    });
    

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log(this.connectedUser);
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id');



    this.productService.getProdcut(this.id).subscribe(
      (data)=>{
        this.product = data.product

        if (this.product.role=="Purificateur") {
          this.list= this.product.list.split(";");
          // console.log(this.list);
      }

      }
    )
  }

  valider(){
  if (this._demande="achat") {
    console.log(this._demande);
    
    this.demande.validation = "Achat du produit";   
  } else{
    this.demande.validation = "Demande du devis"
  }
  console.log(this.demande.validation );
  
  this.demande.etat= "En attente";
  this.demande.idClient= this.connectedUser._id;
  this.demande.client= this.connectedUser.firstName+" "+this.connectedUser.lastName;
  console.log( this.connectedUser._id);
  
  this.demande.idProduct = this.product._id;
  this.demande.product = this.product.role+" Type: "+this.product.type;
 

  this.demandeService.valider(this.demande).subscribe(
    (data) => {
      console.log(data.message);
    }
  )

}


}
