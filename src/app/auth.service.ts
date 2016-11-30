import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// Avoid name not found warnings

let Auth0Lock: any = require('auth0-lock').default; //this is buggy but a persistent problem. Works now.

@Injectable()
export class Auth {
  //Configure Auth0Lock
  lock = new Auth0Lock('DZj2YgDoOKZU6tTRlEWsODMF7yGiRuis', 'deeply.eu.auth0.com', {});

  userProfile: Object;

  constructor(private router: Router) {
    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock 'authenticated' event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          //Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        this.router.navigate(['dashboard']);
      });
    });
  };

  public login() {
    // Call the show method to display teh widget.
    this.lock.show();
  };

  public authenticated() {
    // Check for unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    this.router.navigate(['']);
  };


}
