import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MesureService } from 'src/app/services/mesure.service';

@Component({
  selector: 'app-mesures-table',
  templateUrl: './mesures-table.component.html',
  styleUrls: ['./mesures-table.component.css']
})
export class MesuresTableComponent implements OnInit {
  displayedColumns=['region',  'chlore', 'calcaire', 'residu', 'actions'];
mesures:any=[];
  
  constructor(private activatedRoute : ActivatedRoute, 
              private router :Router,
              private mesureService :MesureService) { }

  ngOnInit(): void {
    this.mesureService.getAllMesures().subscribe(
      (data)=>{

      this.mesures =data.mesures;
  
  
  });

  }


deleteMesure(id:any){
  console.log(id);

  this.mesureService.deleteMesure(id).subscribe(
    (data) => {
      console.log(data.message);
      this.mesureService.getAllMesures().subscribe(
        (data) => {
          this.mesures = data.mesures;
        });
      
    });
  

}

editMesure(id:any){
  this.router.navigate([`editMesure/${id}`])
}


}
