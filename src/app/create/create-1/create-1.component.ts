import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-1',
  template: `
    <h4>Step 1</h4>
    <p>Make sure no-one has already created your droplet. Check below. If nothing comes up you are good to go.</p>
    <input class="form-control" type="text" placeholder="Something here." (keyup)="search">
    <!-- have search results here -->
    <button class="btn btn-large" (click)="basicDetails()">No-one has created a droplet like this</button>
  `,
  styles: []
})
export class Create1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  basicDetails() {
    this.router.navigate(['create/create2']);
  }

}
