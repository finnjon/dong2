import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropletService } from '../../droplet.service';
import { Droplet } from '../../droplet';
import { HttpService } from '../../http.service';
import { Response } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-1',
  template: `
    <p>Make sure no-one has already created your droplet. Check below. If nothing comes up you are good to go.</p>
    <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
      <div class="form-group">
        <input id="name"
               class="form-control"
               type="text"
               placeholder="Add unique name"
               [ngModel]="droplet.name"
               name="name"
               (keyup)="onSearch(f.value.name)"
               autocomplete="off"
               (focus)="onFocus()">
      </div>
      <div class="advice">
        <p>Your name should be unique, not less than 10 characters, and the most obvious way a person would search for it.</p>
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
export class Create1Component implements OnInit, AfterViewInit {
  droplet: Droplet;
  searchResults = [];
  error;
  focussed = false;

  constructor(
    private router: Router,
    private dropletService: DropletService,
    private httpService: HttpService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
    this.dropletService.pushedDroplet.subscribe(
      droplet => this.droplet = droplet
    )
  }

  ngAfterViewInit() {
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
        (error) => {
          this.error = error;
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        },
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

  onFocus() {
    this.focussed = true;
  }

}
