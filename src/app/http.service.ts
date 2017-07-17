import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Auth } from './auth.service';
import { Droplet } from './droplet';
import { Pool } from './pool';
import { Observable } from 'rxjs/Observable'; //curious
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';

@Injectable()
export class HttpService {

  //This environment variable has been set in the app.yaml file which google cloud uses to set it. Locally we use 8080 for the api.
  API_URL: string = process.env.url || environment.apiUrl;

  constructor(
    private http: Http,
    public authHttp: AuthHttp,
    private auth: Auth
  ) { }

  //droplets

  getReviewDroplets() {
    return this.authHttp.get(`${this.API_URL}/api/reviewDroplets`);
  }

  getUserDroplets() {
    return this.authHttp.get(`${this.API_URL}/api/userDroplets`);
  }

  getUserPools() {
    return this.authHttp.get(`${this.API_URL}/api/userPools`);
  }

  getUserReviewDroplets() {
    return this.authHttp.get(`${this.API_URL}/api/userReviewDroplets`);
  }

  getDroplet(id) {
    return this.http.get(`${this.API_URL}/api/droplets/` + id);
  }

  getPool(id) {
    return this.http.get(`${this.API_URL}/api/pools/` + id);
  }

  searchDroplets(query) {
    return this.http.get(`${this.API_URL}/api/droplets?search=` + query);
  }

  saveDroplet(droplet: Droplet) {
    if (droplet._id) {
      droplet.updated_at = new Date().toJSON();
      droplet.status = this.checkStatus(droplet);
      return this.put(droplet);
    }
    return this.post(droplet);
  }

  private post(droplet: Droplet) {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this
      .authHttp
      .post(`${this.API_URL}/api/droplets`, JSON.stringify(droplet), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private put(droplet: Droplet) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let url = `${this.API_URL}/api/droplets`;
    return this
      .authHttp
      .post(url, JSON.stringify(droplet), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  //pools

  searchPools(query) {
    return this.http.get(`${this.API_URL}/api/pools?search=` + query);
  }

  savePool(pool: Pool) {
    if (pool._id) {
      pool.updated_at = new Date().toJSON();
      pool.status = this.checkPoolStatus(pool);
      return this.putPool(pool);
    }
    return this.postPool(pool);
  }

  private postPool(pool: Pool) {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this
      .authHttp
      .post(`${this.API_URL}/api/pools`, JSON.stringify(pool), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  private putPool(pool: Pool) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let url = `${this.API_URL}/api/pools`;
    return this
      .authHttp
      .post(url, JSON.stringify(pool), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  //general

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private checkStatus(droplet) {
    if (
      droplet.name &&
      droplet.description &&
      (droplet.explanations.length > 0) &&
      (droplet.questions.length > 4) &&
      (droplet.tags.length > 2)
    ) { return "complete"; }
    else {
      return "draft";
    }
  }

  private checkPoolStatus(pool) {
    if (
      pool.name &&
      pool.description &&
      (pool.tags.length > 2) &&
      (pool.droplets.length > 10)
    ) { return "complete"; }
    else {
      return "draft";
    }
  }

}
