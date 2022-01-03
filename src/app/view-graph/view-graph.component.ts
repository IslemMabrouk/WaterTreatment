import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MesureService } from '../services/mesure.service';

declare var require: any;


@Component({
  selector: 'app-view-graph',
  templateUrl: './view-graph.component.html',
  styleUrls: ['./view-graph.component.css']
})
export class ViewGraphComponent implements OnInit {
  @Input() title: string;
  mesures:any;
  suivi:any=[];
  date:any=[];

  public options: any = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
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
      name: '',
      data: this.suivi[0]
    }]
  };

  constructor(private mesureService : MesureService) { }

  ngOnInit() {
     Highcharts.chart('container', this.options);
 
 
     this.mesureService.getAllMesures().subscribe(
      (data)=>{
      this.mesures =data.mesures;
        for (let i = 0; i < this.mesures.length; i++) {
           if (this.mesures[i].role=="suivi") {
             this.date.push(this.mesures[i].date);
             
             this.suivi.push( Number (this.mesures[i].chlore))

           }
          
        }
      
  console.log( this.suivi);
  console.log( this.date);

  console.log(this.options.series);
  

  });
  
 
    }

  

}