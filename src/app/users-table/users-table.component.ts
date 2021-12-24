import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../services/user.service";

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