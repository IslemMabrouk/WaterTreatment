import { Component, Input, OnInit } from '@angular/core';
import { MesureService } from '../services/mesure.service';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {
  @Input() title: string;

  myType = 'PieChart';
  
    myData3 = [
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

  //::::::::::::::::Residu Sec:::::::::::::::::::://

      
        let r1=0;
        let r2=0;
        let r3=0;
        
        for (let i = 0; i < this.mesures.length; i++) {
          console.log(this.mesures[i].residu);
<<<<<<< HEAD
          if (this.mesures[i].residu < 2500) {
          r1 = r1 + 1;
            
          } else if (this.mesures[i].residu < 2600){
=======
          if (this.mesures[i].residu < 60) {
          r1 = r1 + 1;
            
          } else if (this.mesures[i].residu < 70){
>>>>>>> 7f7e9144676971df746a7f8ebe959b830b5f26c2
            r2 = r2 + 1;
            
          }
          else{
            r3 = r3 + 1;
          }
          
        }
        this.myData3[0][1]=r1;
        this.myData3[1][1]=r2;
        this.myData3[2][1]=r3;


      }
    )
  }

}
