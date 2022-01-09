import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private productService : ProductService, private router :Router, private activatedRoute :ActivatedRoute) { }


  ngOnInit(): void {


    this.productService.getAllProducts().subscribe(
      (data)=>{
        
        
    this.products = data.products;
    console.log(this.products);
      })


  }

  deleteProduct(id: any) {
    console.log(id);
    
    this.productService.deleteProduct(id).subscribe(
      (data) => {
      console.log(data.message);
      this.productService.getAllProducts().subscribe((data) => {
        this.products = data.products;
      });
    });
  }
  editProduct(id: any) {
    this.router.navigate([`admin/editProduct/${id}`])
}


}