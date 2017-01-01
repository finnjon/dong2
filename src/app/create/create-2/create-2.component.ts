import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-create-2',
  template: `
    <h4>Step 2</h4>
    <div>Now give your droplet a description.</div>
    <br>
    <form (ngSubmit)="addDescription(f.value)" #f="ngForm">
      <div class="form-group">
        <label>Description: <small>(required)</small></label>
        <textarea id="description"
                  class="form-control"
                  rows="3"
                  name="description"
                  placeholder="Add helpful description of what this droplet tests." [ngModel]="droplet.description"
                  required></textarea>
      </div>
      <div class="advice">
        <p>Give a brief and clear description of whatever your droplet is testing, with examples if possible. Use HTML tags to make it clearer.</p>
      </div>
      <button type="submit" class="btn btn-default">Save Description</button>
      <button class="btn" [routerLink]="['/create/create3']">Next</button>
    </form>

  `,
  styles: []
})

export class Create2Component implements OnInit, AfterViewChecked {
  droplet: Droplet;

  constructor(
    private dropletService: DropletService,
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  ngAfterViewChecked() {
    let el = document.getElementById('description');
    if (el) { el.focus(); }
  }

  addDescription(droplet: Droplet){
    this.droplet.description = droplet.description;
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
          this.router.navigate(['create/create3']);
        }
      );
  }
}
