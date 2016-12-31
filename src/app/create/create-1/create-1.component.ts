import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { DropletService } from '../../droplet.service';
import { Droplet } from '../../droplet';
import { HttpService } from '../../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-create-1',
  template: `
    <h4>Step 1</h4>
    <p>Make sure no-one has already created your droplet. Check below. If nothing comes up you are good to go.</p>
    <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
      <div class="form-group">
        <input id="name" class="form-control" type="text" placeholder="Add unique name" [ngModel]="droplet.name" name="name" (keyup)="onSearch(f.value.name)" autocomplete="off">
      </div>
      <div class="results">
        <div *ngFor="let result of searchResults">
          <div>{{ result.name }}</div>
        </div>
      </div>
      <button type="submit" class="btn btn-default">
        <span *ngIf="droplet._id">Edit Name</span>
        <span *ngIf="!droplet._id">Add Name</span>
      </button>
    </form>
  `,
  styleUrls: ['./create-1.component.css']
})
export class Create1Component implements OnInit, AfterViewChecked {
  droplet: Droplet;
  searchResults = [];
  error;

  constructor(
    private router: Router,
    private dropletService: DropletService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  ngAfterViewChecked() {
    let el = document.getElementById('name');
    if (el) { el.focus(); }
  }

  onSubmit(data) {
    this.droplet.name = data.name;
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        },
        (error) => this.error = error,
        () => this.router.navigate(['create/create2'])
      );
  }

  onSearch(query) {
    this.httpService.searchDroplets(query)
      .subscribe(
        (data: Response) => {
          this.searchResults = data.json();
      });
  }

}
