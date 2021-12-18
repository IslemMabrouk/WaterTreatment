import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-adoucisseur-detail',
  templateUrl: './adoucisseur-detail.component.html',
  styleUrls: ['./adoucisseur-detail.component.css']
})
export class AdoucisseurDetailComponent implements OnInit {
  @Input() a : any;

  constructor( private router :Router) { }

  ngOnInit(): void {
    
  }



  displayProduct(id:any){
    this.router.navigate([`displayProduct/${id}`]);
  }

}

