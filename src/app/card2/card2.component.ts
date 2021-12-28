import { Component, Input, OnInit } from '@angular/core';
import { MesureService } from '../services/mesure.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
  @Input() title: string;

  myType = 'PieChart';

    myData2 = [
      ['Bon', 0],
      ['Eau Douce', 0],
      ['Médiocre', 0],
    ];
  

  
    mesures:any;
    
  constructor( private mesureService : MesureService) { }

  ngOnInit(): void {
    this.mesureService.getAllMesures().subscribe(
      (data) =>{
        console.log('Mesures from data');
        this.mesures = data.mesures ;

        let c1=0;
        let c2=0;
        let c3=0;
        
        for (let i = 0; i < this.mesures.length; i++) {
          console.log(this.mesures[i].calcaire);
          if (this.mesures[i].calcaire < 300) {
          c1 = c1 + 1;
            
          } else if (this.mesures[i].calcaire < 400){
            c2 = c2 + 1;
            
          }
          else{
            c3 = c3 + 1;
          }
          
        }
        this.myData2[0][1]=c1;
        this.myData2[1][1]=c2;
        this.myData2[2][1]=c3;
        console.log(this.myData2);

      }
    )
  }

}