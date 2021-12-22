import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratService } from 'src/app/services/contrat.service';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent implements OnInit {
contrats:any;
services;
serves;

  constructor(private contratServices : ContratService,
    ) { }

  ngOnInit(): void {
  this.contratServices.getAllContrats().subscribe(
(data)=>{
console.log("here in get all contrats");
this.contrats = data.contrats;







})


      
      }


  





}
