import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  id:any;
  product:any;
  list:any;
  constructor( private activatedRoute : ActivatedRoute,
               private productService : ProductService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
 
    this.productService.getProdcut(this.id).subscribe(
      (data) =>{
        this.product = data.product;
        console.log(this.product);
        if (this.product.role=="Purificateur") {
          this.list= this.product.list.split(";");
          console.log(this.list);
          
          
        }

      }
    )
    
    
    
  }

}
