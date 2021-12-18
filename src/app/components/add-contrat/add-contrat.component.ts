import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContratService } from 'src/app/services/contrat.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})

export class AddContratComponent implements OnInit {
contrat:any={};
addContratForm :FormGroup;
  constructor(private contratServices : ContratService,
    private fb :FormBuilder) { }


  ngOnInit(): void {
    this.addContratForm = this.fb.group({
      Mr : [''],
      type : [''],
      nombreVisites : [''],
      analyseEau : [''] ,
      désinfectionAppareil : [''],
      contrôleRéglage : [''],
      sel : [''],
      filtres  : [''],
      dépannageMain : [''],
      dépannagePrioritaire : [''],
      piècesDétachées : [''],
   });
  }

  addContrat (){


    this.contratServices.addContrat(this.contrat).subscribe(
    
    (data) =>{
    
    console.log(data.message);
    
    }
    
      )};




}
