import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  myControl = new FormControl();
  regions: User[] = [{ name: 'Ariana' }, {name: 'Béja'}, {name: 'Ben Arous'}, {name: 'Bizerte' }, {name : 'Gabès'}, {name : 'Gafsa' }, {name : 'Jendouba' }, {name : 'Kairouan'}, {name : 'Kasserine'}, {name : 'Kébili'}, {name : 'Le Kef'}, {name : 'Mahdia'}, {name : 'La Manouba'}, {name : 'Médenine'}, {name : 'Monastir'}, {name : 'Nabeul'}, {name : 'Sfax'}, {name :'Sidi Bouzid'}, {name :'Siliana'} , {name :'Sousse'} , {name :'Tataouine'} , {name :'Tozeur'} , {name :'Tunis'} , {name :'Zaghouan'} ];
  filteredRegions: Observable<User[]>;
  region:any;
  mesure:any={}; 
  messageadd:any;
  filterValue:any;
  status:any;

  searchForm: FormGroup;
isDisplay : any;
mesures : any;
searchValue:any;
  constructor(  private fb : FormBuilder,
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
    
      // this.searchValue = this.region;
      // console.log(this.searchValue);
      
      // this.mesureService.search(this.mesure).subscribe(
      //   (data) => {
      //     console.log(data.mesures);
      //     this.isDisplay = !this.isDisplay;
      //     console.log(this.isDisplay);
          
      //     this.mesure = data.mesures;
      //     console.log(this.mesures);
          
          
      //   }
      // )
    
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
