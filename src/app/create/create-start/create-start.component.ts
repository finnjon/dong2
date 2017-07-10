import { Component, OnInit } from '@angular/core';
import { DropletService } from '../../droplet.service';
import { Droplet } from '../../droplet';

@Component({
  selector: 'app-create-start',
  template: `
    <p *ngIf="newDroplet">
      Great! You want to create a droplet. It's easy. Click start and you will be asked to give your droplet a name. Follow the instructions and you will see your droplet building on the right. Turn all the balls green and you will have completed the droplet and can send it for review.
    </p>
    <p *ngIf="!newDroplet">
      To edit your droplet simply click on the element you wish to edit on the right. To add something new click above.
    </p>
    <button *ngIf="newDroplet" class="btn btn-large start-button" [routerLink]="['create1']">Start</button>
  `,
  styles: [`
    .start-button {
      margin-top: 0.7em;
    }
  `]
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
