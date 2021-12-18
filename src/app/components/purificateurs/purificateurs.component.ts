import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-purificateurs',
  templateUrl: './purificateurs.component.html',
  styleUrls: ['./purificateurs.component.css']
})
export class PurificateursComponent implements OnInit {

  products:any;
adoucisseurs: any = [];
purificateurs: any=[];

  constructor( private productService : ProductService ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        console.log('Here data from BE');
        this.products=data.products;

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
