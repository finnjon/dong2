import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropletService } from '../../droplet.service';
import { Droplet } from '../../droplet';
import { HttpService } from '../../http.service';
import { Response } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-1',
  templateUrl: './create-1.component.html',
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
        () => {
          this.flashMessagesService.show('Name updated', { cssClass: 'alert-success', timeout: 2000 });
          this.router.navigate(['create/create2']);
        }
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
