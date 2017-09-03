import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
import { Droplet } from '../droplet';
import { Pool } from '../pool';
import { DropletService } from '../droplet.service';
import { PoolService } from '../pool.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDroplets: any;
  userReviewDroplets: any;
  userPools: any;
  droplet: Droplet;
  error: any;
  pool: Pool;
  udOffset: number = 0; //userDroplets offset
  rdOffset: number = 0; //reviewDroplets offset
  limit: number = 5;
  public showEdit: boolean = false;
  public showEditPool: boolean = false;
  public showReview: boolean = false;
  public title: string = 'Warning!!!';
  public message: string = 'Are you sure you wish to resign as editor of this droplet?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private dropletService: DropletService,
    private poolService: PoolService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.httpService.getUserDroplets(this.udOffset, this.limit)
      .subscribe(
        (data: Response) => this.userDroplets = data.json(),
        (error) => this.error = error
      );
    this.httpService.getUserReviewDroplets(this.rdOffset, this.limit)
      .subscribe(
        (data: Response) => this.userReviewDroplets = data.json(),
        (error) => this.error = error
      );
    this.httpService.getUserPools()
      .subscribe(
        (data: Response) => this.userPools = data.json(),
        (error) => this.error = error
      );
  }

  loadMore(dlts){
    if (dlts === "userDlts") {
      this.udOffset += 5;
      this.httpService.getUserDroplets(this.udOffset, this.limit)
      .subscribe(
        (data: Response) => {
          this.userDroplets = this.userDroplets.concat(data.json());
        },
        (error) => this.error = error
      );
    } else if (dlts === "reviewDlts") {
      this.rdOffset += 5;
      this.httpService.getUserReviewDroplets(this.rdOffset, this.limit)
        .subscribe(
          (data: Response) => {
            this.userReviewDroplets = this.userReviewDroplets.concat(data.json());
          },
          (error) => this.error = error
        );
    }
  }

  editDroplet(id) {
    this.httpService.getDroplet(id)
      .subscribe(
        (data: Response) => {
          this.droplet = data.json();
          this.dropletService.setCurrentDroplet(this.droplet);
        },
        (error) => this.error = error,
        () => this.router.navigate(['/edit', this.droplet._id])
      );
  }

  editPool(id) {
    this.httpService.getPool(id)
      .subscribe(
        (data: Response) => {
          this.pool = data.json();
          this.poolService.setCurrentPool(this.pool);
        },
        (error) => this.error = error,
        () => {
          console.log(this.pool);
          console.log("routing");
          this.router.navigate(['/edit-pool', this.pool._id]);
        }
      );
  }

  unreviewDroplet(droplet, index) {
    droplet.verified = "submitted";
    droplet.editor = "";
    this.httpService.saveDroplet(droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
          this.flashMessagesService.show('You have successfully resigned as editor of this droplet', { cssClass: 'alert-success', timeout: 2000 });
        },
        (error) => {
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        },
        () => this.userReviewDroplets.splice(index, 1)
      );
  }

  reviewDroplet(droplet: Droplet) {
    this.dropletService.droplet = droplet;
    this.router.navigate(['/editor', droplet._id]);
  }

}
