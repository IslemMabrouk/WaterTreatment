import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratService } from 'src/app/services/contrat.service';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent implements OnInit {

isLinear = false;
firstFormGroup: FormGroup;
secondFormGroup: FormGroup;

  constructor(private contratServices : ContratService,
    private fb :FormBuilder) { }

  ngOnInit(): void {
  this.firstFormGroup = this.fb.group({
          firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this.fb.group({
          secondCtrl: ['', Validators.required],
        });
  
      
      }



  





}
