import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../components/add-mesure/add-mesure.component';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  id:any;

  // dataSource : MatTableDataSource<User>;
  users :any; 
  displayedColumns=['firstName', 'lastName', 'email', 'tel', 'role', 'actions'];
// @ViewChild(MatSort,{static:true}) sort:MatSort;
  constructor(private userService :UserService,
    private activatedRoute : ActivatedRoute, private router :Router) { } 

  ngOnInit(): void  {

    this.userService.getUsers().subscribe(
      (data)=>{

      this.users =data.users;
      console.log(this.users);
      
  
  
  });
  }
  deleteUser(id: any) {
    console.log(id);
    
    this.userService.deleteUser(id).subscribe(
      (data) => {
      console.log(data.message);
      this.userService.getUsers().subscribe((data) => {
        this.users = data.users;
      });
    });
  }
  editUser(id: any) {
    this.router.navigate([`editUser/${id}`])
}


}