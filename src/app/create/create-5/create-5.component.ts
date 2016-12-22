import { Component, OnInit } from '@angular/core';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';

@Component({
  selector: 'app-create-5',
  template: `
    <h4>Step 5</h4>
    <div>Create hints that will help jog students' memories as they try to answer questions.</div>
    <br>
    <form (ngSubmit)="addHint(f.value)" #f="ngForm">
      <div class="form-group">
        <label>Hint: <small>(required)</small></label>
        <textarea class="form-control" rows="3" [(ngModel)]="hint" name="hint" placeholder="Add a hint." required></textarea>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
      <button class="btn btn-large" [routerLink]="['/create/create4']">Next</button>
    </form>
  `,
  styles: []
})
export class Create5Component implements OnInit {
  droplet: Droplet;
  hint: String;

  constructor(private dropletService: DropletService) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  addHint(hint) {
    this.droplet.hints.push(hint); // hint is an object: hint.hint is the text
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.dropletService.pushDroplet(this.droplet);
    this.hint = ''; //empty form field
  }

}
