import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DropletService } from '../droplet.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Response } from '@angular/http';
import { Auth } from '../auth.service';
import { Droplet } from '../droplet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  template: `
    <h3>Droplets for Review</h3>
    <p>Draft droplets ready for review will show up here. Only people who have the right to edit droplets can select them. If you would like this role please contact us immediately.</p>
    <div *ngFor="let droplet of reviewDroplets">
      <div class="row pad vertical-align">
          <div class="col-md-3">{{ droplet.name | uppercase }}</div>
          <div class="col-md-4" *ngIf="!droplet.editor && role !== 'user'">
            <button class="btn btn-primary btn-xsmall" (click)="addEditor(droplet)">Review this droplet</button>
          </div>
          <div class="col-md-2"><button class="btn btn-success btn-xsmall" *ngIf="droplet.editor === profile.sub" (click)="reviewDroplet(droplet)">Go to Review</button></div>
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
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.profile = this.auth.userProfile;
    this.role = this.auth.role;
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
    droplet.verified = "under review";
    this.httpService.saveDroplet(droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        },
        (error) => {
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        }
      );
  }

  reviewDroplet(droplet: Droplet) {
    this.router.navigate(['/editor', droplet._id]);
  }

}
