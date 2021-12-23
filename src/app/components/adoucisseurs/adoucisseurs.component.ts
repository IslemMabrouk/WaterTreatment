import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-adoucisseurs',
  templateUrl: './adoucisseurs.component.html',
  styleUrls: ['./adoucisseurs.component.css']
})
export class AdoucisseursComponent implements OnInit {
products:any;
adoucisseurs: any = [];
purificateurs: any=[];
id:any;
product:any;
  constructor( private productService : ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(
      (data) =>{
        console.log('Here data from BE');
        this.products = data.products;

        for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].role == "Adoucisseur") {
        this.adoucisseurs.push(this.products[i])
      } else if (this.products[i].role == "Purificateur"){
        this.purificateurs.push(this.products[i]);
      }
      
    }

      }
    )

    
    

  }




}
