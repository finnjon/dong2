import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings

let Auth0Lock: any = require('auth0-lock').default;

@Injectable()
export class Auth {
  //Configure Auth0Lock
  lock = new Auth0Lock('DZj2YgDoOKZU6tTRlEWsODMF7yGiRuis', 'deeply.eu.auth0.com', {});

  constructor() {
    // Add callback for lock 'authenticated' event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

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
  };


}
