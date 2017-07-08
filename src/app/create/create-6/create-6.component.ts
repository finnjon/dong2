import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';
import { HttpService } from '../../http.service';
import { Subscription } from 'rxjs/Rx';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-6',
  template: `
    <div>Add search terms to help people find your droplet. Add one at a time and press enter or add.</div>
    <br>
    <form (ngSubmit)="addTag(f.value)" #f="ngForm">
      <div class="form-group">
        <label>Tag: <small>(required)</small></label>
        <input id="tag" class="form-control" [(ngModel)]="tag" name="tag" type="text" placeholder="Add tags one at a time." required>
      </div>
      <div class="advice">
        <p>taggy tag</p>
      </div>
      <button type="submit" class="btn btn-default">Add Tag</button>
    </form>
  `,
  styles: []
})
export class Create6Component implements OnInit, AfterViewChecked {
  droplet: Droplet;
  tag: String;

  constructor(
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

  ngAfterViewChecked() {
    let el = document.getElementById('tag');
    if (el) { el.focus(); }
  }

  //note you can't edit tags as there is no point. You just delete the one you don't like and make another one.
  addTag(tag) {
    tag.created_at = new Date().toJSON();
    this.droplet.tags.push(tag);
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => this.dropletService.updateCurrentDroplet(droplet),
        (error) => this.flashMessagesService.show('An error occurred!', { cssClass: 'alert-success', timeout: 2000 }),
        () => this.flashMessagesService.show('Tag updated', { cssClass: 'alert-success', timeout: 2000 })
      );
    this.tag = ''; //empty form field
  }

}
