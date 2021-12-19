import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  id:any;
  product:any;
  list:any;
  connectedUser:any;
  demande:any;
  constructor(private productService : ProductService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    console.log(this.connectedUser);
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProdcut(this.id).subscribe(
      (data)=>{
        this.product = data.product

        if (this.product.role=="Purificateur") {
          this.list= this.product.list.split(";");
          console.log(this.list);
      }

      }
    )
  }

valider(){
  this.demande.idClient = this.connectedUser.id;
  this.demande.idProduct = this.product.id;

}

}
