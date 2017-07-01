import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDroplets: any;
  userReviewDroplets: any;
  droplet: Droplet;
  error: any;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private dropletService: DropletService
  ) { }

  ngOnInit() {
    //note that I set the new droplet here because this is first component loaded after authentication. To set the new droplet requires a user id so I can't do it earlier. If I do it in the create component it doesn't work.
    this.dropletService.setNewDroplet();
    this.httpService.getUserDroplets()
      .subscribe(
        (data: Response) => {
          this.userDroplets = data.json();
      });
    this.httpService.getUserReviewDroplets()
      .subscribe(
        (data: Response) => {
          this.userReviewDroplets = data.json();
      });
  }

  editDroplet(id) {
    this.httpService.getDroplet(id)
      .subscribe(
        (data: Response) => {
          this.droplet = data.json();
          this.dropletService.setCurrentDroplet(this.droplet);
          this.router.navigate(['/edit', this.droplet._id]);
        }
      ),
      (error) => this.error = error;
      () => this.router.navigate(['/edit', this.droplet._id]);
  }

}
