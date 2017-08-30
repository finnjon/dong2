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
  templateUrl: 'review.component.html',
  styles: [`
    .pad {
      margin-bottom: 3px;
    }
    .add-cursor {
      cursor: pointer;
      cursor: hand;
    }
    .description {
      padding: 10px 10px 10px 0;
    }
    .no-permission {
      margin: 40px 40px 40px 40px;
      font-size: 16px;
    }
  `]
})
export class ReviewComponent implements OnInit {
  reviewDroplets: any;
  profile: any;
  role: any;
  showDescription = {};

  constructor(
    private httpService: HttpService,
    private dropletService: DropletService,
    public auth: Auth,
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.profile = this.auth.userProfile;
    if (this.auth.role) { this.role = this.auth.role[0] };
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
        (error) => this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 }),
        () => this.flashMessagesService.show('You have successfully become the editor', { cssClass: 'alert-success', timeout: 2000 })
      );
  }

  reviewDroplet(droplet: Droplet) {
    this.router.navigate(['/editor', droplet._id]);
  }

}
