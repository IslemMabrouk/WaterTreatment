import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purificateur-detail',
  templateUrl: './purificateur-detail.component.html',
  styleUrls: ['./purificateur-detail.component.css']
})
export class PurificateurDetailComponent implements OnInit {
  @Input() p : any;
  id:any;
  list:any;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.list= this.p.list.split(";");

  }

  displayProduct(id:any){
    this.router.navigate([`displayProduct/${id}`]);
  }

}


