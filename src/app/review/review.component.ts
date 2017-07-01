import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DropletService } from '../droplet.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Response } from '@angular/http';
import { Auth } from '../auth.service';
import { Droplet } from '../droplet';

@Component({
  selector: 'app-review',
  template: `
    <h3>Droplets for Review</h3>
    <p>Draft droplets ready for review will show up here. Only people who have the right to edit droplets can select them. If you would like this role please contact us immediately.</p>
    <h5>Role: {{ role }}</h5>
    <div *ngFor="let droplet of reviewDroplets">
      <div class="row pad">
        <div class="col-md-2">{{ droplet.name }}</div>
        <div class="col-md-2"><button class="btn btn-primary btn-xsmall" *ngIf="!droplet.editor && role !== 'user'" (click)="addEditor(droplet)">Review this droplet</button></div>
        <div class="col-md-2"><button class="btn btn-danger btn-xsmall" *ngIf="droplet.editor === profile.sub">You are reviewing</button></div>
      </div>
    </div>

  `,
  styles: [`
    .pad {
      margin-bottom: 3px;
    }
  `]
})
export class ReviewComponent implements OnInit {
  reviewDroplets: any;
  profile: any;
  role: any;

  constructor(
    private httpService: HttpService,
    private dropletService: DropletService,
    public auth: Auth,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.role = this.auth.userProfile["http://roles/roles"][0];
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.role = profile["http://roles/roles"][0];
      });
    }
    this.httpService.getReviewDroplets()
      .subscribe(
        (data: Response) => {
          this.reviewDroplets = data.json();
        },
        (error) => {
          this.flashMessagesService.show('Could not retrieve review droplets', { cssClass: 'alert-success', timeout: 2000 });
        }
      );
  }

  addEditor(droplet: Droplet) {
    droplet.editor = this.profile.sub;
    console.log(droplet);
    this.httpService.saveDroplet(droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        },
        (error) => {
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        }
      );
      //if success, send notification and if the button does not flip, flip it.
  }

}
