import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(){
    let connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    if (connectedUser.role == 'admin') {
      return true;
    }
    alert("VOUS N'AVEZ PAS LES DROITS D'ADMINISTRATION");
    return false;
  }
  
}
