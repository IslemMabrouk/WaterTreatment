import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MesureService } from 'src/app/services/mesure.service';
import { User } from '../add-mesure/add-mesure.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  myControl = new UntypedFormControl();
  regions: User[] = [{ name: 'Ariana' }, {name: 'Béja'}, {name: 'Ben Arous'}, {name: 'Bizerte' }, {name : 'Gabès'}, {name : 'Gafsa' }, {name : 'Jendouba' }, {name : 'Kairouan'}, {name : 'Kasserine'}, {name : 'Kébili'}, {name : 'Le Kef'}, {name : 'Mahdia'}, {name : 'La Manouba'}, {name : 'Médenine'}, {name : 'Monastir'}, {name : 'Nabeul'}, {name : 'Sfax'}, {name :'Sidi Bouzid'}, {name :'Siliana'} , {name :'Sousse'} , {name :'Tataouine'} , {name :'Tozeur'} , {name :'Tunis'} , {name :'Zaghouan'} ];
  filteredRegions: Observable<User[]>;
  region:any;
  mesure:any={}; 
  messageadd:any;
  filterValue:any;
  status:any;

  searchForm: UntypedFormGroup;
mesures : any;
searchValue:any;
//::::::::Search::::::::::://

chloreIsBon:any=false;
chloreIsDouce:any=false;
chloreIsMed:any=false;
//****************/
calcaireIsBon:any=false;
calcaireIsDouce:any=false;
calcaireIsMed:any=false;
//****************/
residuIsBon:any=false;
residuIsDouce:any=false;
residuIsMed:any=false;

quality:any=false;

  constructor(  private fb : UntypedFormBuilder,
               private mesureService : MesureService,
               ) { }

  ngOnInit(): void {

    
//::::::::::::::search:::::::::::::://
// this.searchForm = this.fb.group({
//   searchValue : ['']
// })

//::::::::::::::::::::::::::::::::::::::://


 // inject your created service which makes the http-request
    this.filteredRegions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.regions.slice())),

    );


  }

  search(){
    
    console.log("okkkkkk");
    
      this.mesure.searchValue = this.region;
      console.log(this.mesure.searchValue);
      
      this.mesureService.search(this.mesure).subscribe(
        (data) => {
          console.log(data.mesure);
          
          this.mesure = data.mesure;
          for (let i = 0; i < this.mesure.length; i++) {
              if (this.mesure[i].chlore < 600) {
               this.chloreIsBon =!this.chloreIsBon;               
              } else if (this.mesure[i].chlore < 650) {
                this.chloreIsDouce =! this.chloreIsDouce;               
              }else{
                this.chloreIsMed= !this.chloreIsMed ;              
              }

//:::::::::::::Calcaire::::::::::::::::::::::::://
              if (this.mesure[i].calcaire < 300) {
                this.calcaireIsBon =!this.calcaireIsBon;               
               } else if (this.mesure[i].calcaire < 350) {
                 this.calcaireIsDouce =! this.calcaireIsDouce;               
               }else{
                 this.calcaireIsMed= !this.calcaireIsMed ;              
               }
//:::::::::::::Résidu Sec::::::::::::::::::::::::://
if (this.mesure[i].residu < 2500) {
  this.residuIsBon =!this.residuIsBon;               
 } else if (this.mesure[i].residu < 2550) {
   this.residuIsDouce =! this.residuIsDouce;               
 }else{
   this.residuIsMed= !this.residuIsMed ;              
 }

 if (this.chloreIsBon || this.chloreIsDouce || this.calcaireIsDouce || this.calcaireIsBon || this.residuIsBon || this.residuIsDouce ) {
   this.quality=!this.quality;
 }
            

          }
          
          
        }
      )
    
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


  


  }
