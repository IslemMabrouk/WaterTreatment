import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'src/app/services/demande.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-demande-table',
  templateUrl: './demande-table.component.html',
  styleUrls: ['./demande-table.component.css']
})
export class DemandeTableComponent implements OnInit {
  demandes:any=[];
  displayedColumns=['validation','client', 'product', 'etat','actions'];

  constructor(private demandeService : DemandeService,
    private productService : ProductService) { }


  ngOnInit(): void {


    this.demandeService.getAllDemandes().subscribe(
      (data)=>{
        
        
    this.demandes = data.demandes;console.log(this.demandes);
      })


  }




}

