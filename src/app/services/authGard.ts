import { Injectable } from "@angular/core";
import{CanActivate, Router,} from"@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth : AuthService,
                private router : Router  ){

    }

    canActivate(){
     if (this.auth.isLoggedIn()) {
        return true;
     }
     alert("VOUS N'ÊTES PAS CONNECTÉ")
     this.router.navigate(['/registration']);
     return false;
    }
}