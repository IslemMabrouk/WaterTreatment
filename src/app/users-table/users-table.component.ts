import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../components/add-mesure/add-mesure.component';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  connectedUser:any;
  id:any;

  // dataSource : MatTableDataSource<User>;
  users :any; 
  array:any;
admins:any[]=[];
clients:any[]=[];
  displayedColumns=['firstName', 'lastName', 'email', 'tel', 'role'];
// @ViewChild(MatSort,{static:true}) sort:MatSort;
  constructor(private userService :UserService,
    private activatedRoute : ActivatedRoute) { } 

  ngOnInit(): void  {
    this.userService.getUsers().subscribe(
      (data)=>{



      this.users =data.users;
      this.admins =data.users;
  
      
this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
       

      // for (let i = 0; i < this.admins.length; i++) {
      //     if (this.users[i].role != 'admin' ) {
      //     this.admins.splice(i,1);
      //     }

      //     }
        });
        // this.array= this.users.split(";");
        // this.dataSource = new MatTableDataSource (this.users);
        // console.log(this.dataSource);
        
        // this.dataSource.sort =this.sort;
        
      
        
  }

}


