import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';

@Component({
  selector: 'app-create-6',
  template: `
    <h4>Step 6</h4>
    <div>Add search terms to help people find your droplet. Add one at a time and press enter or add.</div>
    <br>
    <form (ngSubmit)="addTag(f.value)" #f="ngForm">
      <div class="form-group">
        <label>Tag: <small>(required)</small></label>
        <input id="tag" class="form-control" [(ngModel)]="tag" name="tag" type="text" placeholder="Add tags one at a time." required>
      </div>
      <button type="submit" class="btn btn-default">Add Tag</button>
    </form>
  `,
  styles: []
})
export class Create6Component implements OnInit, AfterViewChecked {
  droplet: Droplet;
  tag: String;

  constructor(private dropletService: DropletService) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  ngAfterViewChecked() { //sets focus if not set
    setTimeout(function(){
      document.getElementById('tag').focus();
    }, 500);
  }

  addTag(tag) { //adds one at a time to the tags array.
    this.droplet.tags.push(tag); // hint is an object: hint.hint is the text
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.dropletService.pushDroplet(this.droplet);
    this.tag = ''; //empty form field
  }

}
