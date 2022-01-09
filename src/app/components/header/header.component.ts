import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connectedUser :any;
first:any;
  constructor(private router:Router, private activatedRoute :ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.connectedUser=JSON.parse(localStorage.getItem("connectedUser") || "[]");
    this.first=this.connectedUser.firstName.substr(0,1).toUpperCase();
  }
  logout(){
    localStorage.removeItem("connectedUser");
    window.location.replace('')
   
    }
    editUser(id: any) {
      this.router.navigate([`editUser/${id}`])
  }
  
}

