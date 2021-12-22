import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrat-detail',
  templateUrl: './contrat-detail.component.html',
  styleUrls: ['./contrat-detail.component.css']
})
export class ContratDetailComponent implements OnInit {
  @Input() c : any;
  services;
  id:any;

  constructor(private router : Router,
    ) { }

  ngOnInit(): void {
    this.services= this.c.services.split(";");
          
  }

  displayContrat(id:any){
    this.router.navigate([`displayContrat/${id}`]);
    
  }



}
