import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-start',
  template: `
    <div>
      Hi! Let's get started creating a droplet. The first thing to do is check that the droplet you want to create is not already in use. To do that, click here:
    </div>
    <button class="btn btn-large" [routerLink]="['create1']">Start</button>
  `,
  styles: []
})
export class CreateStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
