import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-mini-card2',
  templateUrl: './mini-card2.component.html',
  styleUrls: ['./mini-card2.component.css']
})
export class MiniCard2Component implements OnInit {
  demandes:any;
  s:number=0;
  constructor(private demandeService : DemandeService) { }

  ngOnInit(): void {
    this.demandeService.getAllDemandes().subscribe(
      (data)=>{
    this.demandes = data.demandes;
    for (let i = 0; i < this.demandes.length; i++) {
        if (this.demandes[i].validation=="Achat du produit" && this.demandes[i].etat=="Traitée") {
          this.s=this.s+1
        }
   }
    
      })
  }

}
