import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import { MesureService } from '../services/mesure.service';
import { UserService } from '../services/user.service';

declare var require: any;


@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  styleUrls: ['./view-graph.component.css']
})
export class ViewGraphComponent implements OnInit {
  @Input() title: string;
  mesures:any;
  suiviChlore:any=[];
  suiviCalcaire:any=[];
  suiviResidu:any=[];
  suivi:any=false;
  date:any=[];
  data : any;
  highchart : any;
  id:any;
  user:any;
  clientName:string;

  public options: any = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Suivi des Traitements'
    },
    subtitle: {
    },
    xAxis: {
      categories: this.date
    },
    yAxis: {
      title: {
        text: 'Concentration (mg/l)'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'Chlore',
      data: this.suiviChlore
  },
  {
    name: 'Calcaire',
    data: this.suiviCalcaire
    
  },
  {
    name: 'Résidu sec',
    data: this.suiviResidu
    
  }]
  };

  constructor(private mesureService : MesureService,
              private activatedRoute : ActivatedRoute,
              private userService : UserService) { }

  ngOnInit() {
 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.userService.getUserId(this.id).subscribe(
      (data)=>{
        this.user = data.user
        this.clientName = this.user.firstName + ' ' + this.user.lastName
        Highcharts.chart('container', this.options);

      }
    )

     this.mesureService.getAllMesures().subscribe(
      (data)=>{
      this.mesures =data.mesures;
        for (let i = 0; i < this.mesures.length; i++) {
           if ((this.mesures[i].role=="suivi") && (this.mesures[i].idClient==this.id) ) {
             this.date.push(this.mesures[i].date.split("T")[0]);
             this.suiviChlore.push( Number (this.mesures[i].chlore));
             this.suiviCalcaire.push( Number (this.mesures[i].calcaire));
             this.suiviResidu.push( Number (this.mesures[i].residu));
           }
        }
        if (this.date.length==0) {
          this.suivi = !this.suivi;      
        }
        Highcharts.chart('container', this.options);


  

  });
  

  
 
    }

  

}