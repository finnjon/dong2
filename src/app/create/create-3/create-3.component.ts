import { Component, OnInit } from '@angular/core';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';

@Component({
  selector: 'app-create-3',
  template: `
    <h4>Step 3</h4>
    <div>Give a clear explanation to help students understand the droplet being tested.</div>
    <br>
    <form (ngSubmit)="addExplanation(f.value)" #f="ngForm">
      <div class="form-group">
        <label>Explanation: <small>(required)</small></label>
        <textarea class="form-control" rows="3" [(ngModel)]="content" name="content" placeholder="Add an explanation of the content this droplet tests." required></textarea>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
      <button class="btn btn-large" [routerLink]="['/create/create2']">Next</button>
    </form>
  `,
  styles: []
})
export class Create3Component implements OnInit {
  droplet: Droplet;
  newExplanation: {};
  content: String;

  constructor(private dropletService: DropletService) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  addExplanation(explanation) {
    //build explanation object
    this.newExplanation = explanation;
    //push to explanations array
    this.droplet.explanations.push(this.newExplanation);
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.dropletService.pushDroplet(this.droplet);
    //empty form fields
    this.content = '';
  }

}
