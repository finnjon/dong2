import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { DropletService } from '../../droplet.service';
import { Droplet } from '../../droplet';

@Component({
  selector: 'app-create-1',
  template: `
    <h4>Step 1</h4>
    <p>Make sure no-one has already created your droplet. Check below. If nothing comes up you are good to go.</p>
    <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
      <div class="form-group">
        <input id="name" class="form-control" type="text" placeholder="Add unique name" [ngModel]="droplet.name" name="name" (keyup)="search" autofocus>
        <!-- have search results here -->
      </div>
      <button type="submit" class="btn btn-default">Add Name</button>
    </form>
  `,
  styles: []
})
export class Create1Component implements OnInit, AfterViewChecked {
  droplet: Droplet;
  constructor(private router: Router, private dropletService: DropletService) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  ngAfterViewChecked() {
    let el = document.getElementById('name');
    if (el) { el.focus(); }
  }

  onSubmit(data) {
    this.droplet.name = data.name;
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.dropletService.pushDroplet(this.droplet);
    this.router.navigate(['create/create2']);
  }

}
