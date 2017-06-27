import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Auth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.auth.isAuthenticated()) {
        console.log("it's true");
        return true;
      } else {
        this.router.navigate(['signup']);
        console.log("it's false");
        return false;
      }
  }

}
