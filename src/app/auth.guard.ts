import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Auth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //here we are checking for authorised routes whether the user is authenticated. If they are because their details are still in localStorage but they are refreshing a page to reload to reload the app, they will not have a user profile which will cause an error. So then we get the user profile. This will then bump them to the dashboard which is what getProfile does. Later perhaps we can send them to the right route by passing it with the getProfile.
      if (this.auth.isAuthenticated()) {
        if (!this.auth.userProfile) {
          this.auth.getProfile();
        }
        return true;
      } else {
        this.router.navigate(['signup']);
        return false;
      }
  }

}
