import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
export interface User {
  firstName : String,
lastName : String,
email : String,
password : String,
tel : String,
role:String

}



@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */




  displayedColumns: string[] = ['firstName', 'lastName','email','tel','role'];
users:any;
  


cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
   map(({ matches }) => {
     if (matches) {
       return {
         columns: 1,
         miniCard: { cols: 1, rows: 1 },
         chart: { cols: 1, rows: 2 },
         table: { cols: 1, rows: 4 },
       };
     }

    return {
       columns: 4,
       miniCard: { cols: 1, rows: 1 },
       chart: { cols: 2, rows: 2 },
       table: { cols: 4, rows: 4 },
     };
   })
 );

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router, private userServices :UserService) {}

    ngOnInit(): void {


      this.userServices.getUsers().subscribe(
        (data)=>{
          
          console.log(data.users);
          this.users=data.users;});


    }
  
}
