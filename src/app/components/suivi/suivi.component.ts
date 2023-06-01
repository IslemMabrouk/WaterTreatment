import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MesureService } from 'src/app/services/mesure.service';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {
  suiviForm:UntypedFormGroup;
  mesure:any={};
  date:any;
  id:any;
  constructor(private fB : UntypedFormBuilder,
              private mesureService : MesureService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.suiviForm = this.fB.group({
      date:[''],
      chlore:[''],
      calcaire:[''],
      residu:[''],
    });


  }



  suivi(){
    this.mesure.date = this.date;
    this.mesure.idClient = this.id;
    console.log(this.id);
    
    
    this.mesure.role = "suivi";
       this.mesureService.addMesure(this.mesure).subscribe(
         (data) => {
           console.log(data.message);
         }
       )
       console.log(this.mesure);
       
    
      }




}
