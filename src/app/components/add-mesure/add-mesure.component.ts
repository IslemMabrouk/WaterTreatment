import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MesureService } from 'src/app/services/mesure.service';

export interface User {
  name: string;
}


@Component({
  selector: 'app-add-mesure',
  templateUrl: './add-mesure.component.html',
  styleUrls: ['./add-mesure.component.css']
})
export class AddMesureComponent implements OnInit {
  myControl = new FormControl();
  regions: User[] = [{ name: 'Ariana' }, {name: 'Béja'}, {name: 'Ben Arous'}, {name: 'Bizerte' }, {name : 'Gabès'}, {name : 'Gafsa' }, {name : 'Jendouba' }, {name : 'Kairouan'}, {name : 'Kasserine'}, {name : 'Kébili'}, {name : 'Le Kef'}, {name : 'Mahdia'}, {name : 'La Manouba'}, {name : 'Médenine'}, {name : 'Monastir'}, {name : 'Nabeul'}, {name : 'Sfax'}, {name :'Sidi Bouzid'}, {name :'Siliana'} , {name :'Sousse'} , {name :'Tataouine'} , {name :'Tozeur'} , {name :'Tunis'} , {name :'Zaghouan'} ];
  filteredRegions: Observable<User[]>;
  region:any;
  mesure:any={}; 
  addMesureForm : FormGroup;
  messageadd:any;
  filterValue:any;
  status:any;
  id:any;
  title:any;
  constructor( private formbuilder :FormBuilder,
               private mesureService : MesureService,
               private router : Router,
               private activatedRoute : ActivatedRoute,
               ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      //edit
      this.title = 'Edit Mesure';

      this.mesureService.getmesureId(this.id).subscribe((data) => {
        this.mesure = data.mesure;
      });
    } else {
      //add
      this.title = 'Ajouter les Mesures';
    }

        this.addMesureForm = this.formbuilder.group({
      region:[''],
      annee:[''],
      chlore:[''],
      calcaire:[''],
      residu:['']
    });

 // inject your created service which makes the http-request
    this.filteredRegions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.regions.slice())),

    );


  }

  displayFn(user: User): string {
    return user &&  user.name ? user.name : ''  ;
  
  }


    // filter and return the values
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
     // call the service which makes the http-request
    return this.regions.filter(region => region.name.toLowerCase().includes(filterValue));    

  }

selectedclient(event) {
     this.region = event.option.value.name;
     console.log(this.region);    
   }


  addMesure(){
    if (this.id) {
      this.mesureService.updateMesure(this.mesure).subscribe(
        (data) => {
        console.log(data.message);
        this.router.navigate([`admin/dash`])
      });
    } else {
this.mesure.region = this.region;
console.log(this.mesure.region);
   
   this.mesureService.addMesure(this.mesure).subscribe(
     (data) => {
       console.log(data.message);
     })

  }
}

  }

