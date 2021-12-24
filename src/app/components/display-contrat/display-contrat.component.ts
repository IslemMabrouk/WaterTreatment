import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratService } from 'src/app/services/contrat.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-contrat',
  templateUrl: './display-contrat.component.html',
  styleUrls: ['./display-contrat.component.css']
})
export class DisplayContratComponent implements OnInit {


  id:any;
  contrat:any;
  services:any;
  constructor( private activatedRoute : ActivatedRoute,
               private contratService : ContratService,
               private router : Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
 
    this.contratService.getContratId(this.id).subscribe(
      (data) =>{
        this.contrat = data.contrat;
        console.log(this.contrat);

        this.services= this.contrat.services.split(";");
          console.log(this.services);
          
          
        

      }
    )
    
    
    
  }


  
  valider(){
    this.router.navigate(['contact']);
    
  }

}
