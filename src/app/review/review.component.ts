import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-review',
  template: `
    <h3>Droplets for Review</h3>
    <div *ngFor="let droplet of reviewDroplets">
      <div>{{ droplet.name }}</div>
    </div>
  `,
  styles: []
})
export class ReviewComponent implements OnInit {
  reviewDroplets;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getReviewDroplets()
      .subscribe(
        (data: Response) => {
          this.reviewDroplets = data.json();
      });
  }

}
