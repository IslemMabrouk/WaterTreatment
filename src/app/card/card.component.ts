import { Component, OnInit , Input} from '@angular/core';
import { MesureService } from '../services/mesure.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string;

  myType = 'PieChart';
  myData1 = [
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
//::::::::::::::::Chlore:::::::::::::::::::://

        let s1=0;
        let s2=0;
        let s3=0;
        
        for (let i = 0; i < this.mesures.length; i++) {
          if (this.mesures[i].chlore < 600) {
          s1 = s1 + 1;
            
          } else if (this.mesures[i].chlore < 650){
            s2 = s2 + 1;
            
          }
          else{
            s3 = s3 + 1;
          }
          
        }
        console.log(s2);
        this.myData1[0][1]=s1;
        this.myData1[1][1]=s2;
        this.myData1[2][1]=s3;
        console.log(this.myData1);

      }
    )
  }

}
