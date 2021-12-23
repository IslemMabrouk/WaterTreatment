import { Component, OnInit } from '@angular/core';
import { MesureService } from 'src/app/services/mesure.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  

  myType = 'PieChart';
myData1 = [
    ['Bon', 0],
    ['Eau Douce', 0],
    ['Médiocre', 0],
  ];

  myData2 = [
    ['Bon', 0],
    ['Eau Douce', 0],
    ['Médiocre', 0],
  ];

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
//::::::::::::::::Chlore:::::::::::::::::::://

        let s1=0;
        let s2=0;
        let s3=0;
        
        for (let i = 0; i < this.mesures.length; i++) {
          if (this.mesures[i].chlore < 500) {
          s1 = s1 + 1;
            
          } else if (this.mesures[i].chlore < 600){
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

  //::::::::::::::::Calcaires:::::::::::::::::::://

        let c1=0;
        let c2=0;
        let c3=0;
        
        for (let i = 0; i < this.mesures.length; i++) {
          console.log(this.mesures[i].calcaire);
          if (this.mesures[i].calcaire < 500) {
          c1 = c1 + 1;
            
          } else if (this.mesures[i].calcaire < 600){
            c2 = c2 + 1;
            
          }
          else{
            c3 = c3 + 1;
          }
          
        }
        console.log(s2);
        this.myData2[0][1]=c1;
        this.myData2[1][1]=c2;
        this.myData2[2][1]=c3;
        console.log(this.myData2);


  //::::::::::::::::Residu Sec:::::::::::::::::::://

      
        let r1=0;
        let r2=0;
        let r3=0;
        
        for (let i = 0; i < this.mesures.length; i++) {
          console.log(this.mesures[i].residu);
          if (this.mesures[i].residu < 60) {
          r1 = r1 + 1;
            
          } else if (this.mesures[i].residu < 70){
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
