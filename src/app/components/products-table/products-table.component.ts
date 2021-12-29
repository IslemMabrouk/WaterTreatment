import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  products:any=[];
  displayedColumns=['type','price','volume','pression','economie','list','conception','role', 'img','actions'];

  constructor(
    private productService : ProductService) { }


  ngOnInit(): void {


    this.productService.getAllProducts().subscribe(
      (data)=>{
        
        
    this.products = data.products;
    console.log(this.products);
      })


  }




}