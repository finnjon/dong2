import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { environment } from '../environments/environment';

@Injectable()
export class Auth {
  pushedProfile = new EventEmitter<any>();
  userProfile: any;
  role: any;
  profile: any;
  redirectUri = process.env.url || environment.baseUrl + '/callback';

  auth0 = new auth0.WebAuth({
    clientID: 'DZj2YgDoOKZU6tTRlEWsODMF7yGiRuis',
    domain: 'deeply.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'http://localhost:3001',
    redirectUri: this.redirectUri,
    scope: 'openid profile'
  });

  constructor(public router: Router) { };

  public login(): void {
    this.auth0.authorize();
  };

  public handleAuthentication(): void {
    this.auth0.parseHash(window.location.hash, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
      } else if (err) {
        this.router.navigate(['/signup']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 10000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.getProfile();
  }

  public getProfile(): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
        self.role = self.userProfile["http://roles/roles"];
        this.pushProfile(self);
      }
      this.router.navigate(['/dashboard']);
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/signup']);
  }

  pushProfile(profile: any) { //send profile to any component listening
    this.pushedProfile.emit(profile);
  }


}
