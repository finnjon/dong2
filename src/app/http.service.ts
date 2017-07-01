import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Auth } from './auth.service';
import { Droplet } from './droplet';
import { Observable } from 'rxjs/Observable'; //curious
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

  API_URL: string = 'http://localhost:3001';

  constructor(
    private http: Http,
    public authHttp: AuthHttp,
    private auth: Auth
  ) { }

  getReviewDroplets() {
    return this.authHttp.get(`${this.API_URL}/api/reviewDroplets`);
  }

  getUserDroplets() {
    return this.authHttp.get(`${this.API_URL}/api/userDroplets`);
  }

  getUserReviewDroplets() {
    return this.authHttp.get(`${this.API_URL}/api/userReviewDroplets`);
  }

  getDroplet(id) {
    return this.http.get(`${this.API_URL}/api/droplets/` + id);
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

}
