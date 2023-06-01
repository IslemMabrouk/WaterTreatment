import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ContratService } from 'src/app/services/contrat.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})

export class AddContratComponent implements OnInit {
 //list of checkBox
 _servicesList:composant[];
contrat:any={};
addContratForm :UntypedFormGroup;
  constructor(private contratServices : ContratService,
    private fb :UntypedFormBuilder) { }


  ngOnInit(): void {
    this.getComposant();
    this.addContratForm = this.fb.group({
     
      type : [''],
      nombreVisites : [''],
      depannagePrioritaire : [''],
      services : [''],
   });
  }

  getComposant(){
    this._servicesList=[
      {id:1, name:"Analyse de l'eau", isselected:false},
      {id:2, name:"désinfection de l'appareil", isselected:false},
      {id:3, name:"Controle et reglage des appareils", isselected:false},
      {id:4, name:"Sels inclus", isselected:false},
      {id:5, name:"Filtre inclus", isselected:false},
      {id:6, name:"Dépannage et main d'oeuvre inclus", isselected:false},
      {id:7, name:"Fournitures pièces détachées", isselected:false},

    ]
  }




  onChange(){
    console.log(this._servicesList);
  }
  
  addContrat (){
    this.contrat.services =this._servicesList.filter(x=>x.isselected==true).map(x=>x.name).join(";").toString();

    this.contratServices.addContrat(this.contrat).subscribe(
    
    (data) =>{
    
    console.log(data.message);
    
    }
    
      )};




}
class composant {
  id : number;
  name : string;
  isselected : boolean;
}