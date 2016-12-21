import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropletService } from '../../droplet.service';
import { Droplet } from '../../droplet';

@Component({
  selector: 'app-create-1',
  template: `
    <h4>Step 1</h4>
    <p>Make sure no-one has already created your droplet. Check below. If nothing comes up you are good to go.</p>
    <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
      <input class="form-control" type="text" placeholder="Something here." ngModel name="name" (keyup)="search">
      <!-- have search results here -->
      <button type="submit" class="btn btn-large">This droplet is unique</button>
    </form>
  `,
  styles: []
})
export class Create1Component implements OnInit {
  droplet: Droplet;
  constructor(private router: Router, private dropletService: DropletService) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  onSubmit(data) {
    this.droplet.name = data.name;
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.router.navigate(['create/create2']);
  }

}
