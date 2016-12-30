import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Auth } from './auth.service';

@Injectable()
export class HttpService {
  private API_URL: string = 'http://localhost:3001';

  constructor(
    private http: Http,
    private authHttp: AuthHttp,
    private auth: Auth
  ) { }

  getReviewDroplets() {
    return this.authHttp.get(`${this.API_URL}/api/reviewDroplets`);
  }

  getUserDroplets() {
    return this.authHttp.get(`${this.API_URL}/api/userDroplets`);
  }

  getDroplet(id) {
    return this.http.get(`${this.API_URL}/api/droplets/` + id);
  }

  searchDroplets(query) {
    return this.http.get(`${this.API_URL}/api/droplets?search=` + query);
  }

}
