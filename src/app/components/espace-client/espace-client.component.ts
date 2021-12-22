import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';


export interface PeriodicElement {
  firstName: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})



export class EspaceClientComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'name', 'weight', 'symbol'];
  dataSource:any;
  users:any=[];

  constructor(private userService : UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe( 
      (data) =>{
      this.users = data.users;
      console.log(this.users);
      
      this.dataSource = new MatTableDataSource(this.users)

    });

  }

}
