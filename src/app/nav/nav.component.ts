import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent  {
// nav.component.ts
connectedUser:any;
first:any;
menuItems = ['dashboard', 'addProduct','addAdmin','addMesure'];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



  constructor(private breakpointObserver: BreakpointObserver,
              private router :Router) {}
  
     ngOnInit() {
      this.connectedUser=JSON.parse(localStorage.getItem("connectedUser") || "[]");
      this.first=this.connectedUser.firstName.substr(0,1).toUpperCase();
    }

    logout(){
      localStorage.removeItem("connectedUser");
      this.router.navigate([''])
      }
}

