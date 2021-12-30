import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-mini-card3',
  templateUrl: './mini-card3.component.html',
  styleUrls: ['./mini-card3.component.css']
})
export class MiniCard3Component implements OnInit {
  demandes:any;
  s:any=0;
  constructor(private demandeService : DemandeService) { }

  ngOnInit(): void {

    this.demandeService.getAllDemandes().subscribe(
      (data)=>{
    this.demandes = data.demandes;
    for (let i = 0; i < this.demandes.length; i++) {
        if (this.demandes[i].etat=="En attente") {
          this.s=this.s+1
        }
   }
    
      })

  }

}
