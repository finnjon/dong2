import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../droplet.service';
import { Droplet } from '../../droplet';

@Component({
  selector: 'app-create-start',
  template: `
    <div *ngIf="newDroplet" class="pad8">
      Hi! Let's get started creating a droplet. The first thing to do is check that the droplet you want to create is not already in use. To do that, click here:
    </div>
    <div *ngIf="!newDroplet" class="pad8">
      To edit your droplet simply click on the element you wish to edit on the right. To add something new click above.
    </div>
    <button *ngIf="newDroplet" class="btn btn-large" [routerLink]="['create1']">Start</button>
  `,
  styles: []
})

export class CreateStartComponent implements OnInit {
  droplet: Droplet;
  newDroplet = true;

  constructor(private dropletService: DropletService) {}

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
    if (this.droplet._id){ this.newDroplet = false; }
  }

}
