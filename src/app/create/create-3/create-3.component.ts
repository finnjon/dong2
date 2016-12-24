import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-create-3',
  template: `
    <h4>Step 3</h4>
    <div>Give a clear explanation to help students understand the droplet being tested.</div>
    <br>
    <form (ngSubmit)="addExplanation(f.value, index)" #f="ngForm">
      <div class="form-group">
        <label>Explanation: <small>(required)</small></label>
        <textarea *ngIf="index" class="form-control" rows="3" [(ngModel)]="droplet.explanations[index].content" name="content" placeholder="Add an explanation of the content this droplet tests." required></textarea>
        <textarea *ngIf="!index" class="form-control" rows="3" [(ngModel)]="content" name="content" placeholder="Add an explanation of the content this droplet tests." required></textarea>
      </div>
      <button type="submit" class="btn btn-default">
        <span *ngIf="index">Update</span>
        <span *ngIf="!index">Add</span>
      </button>
      <button class="btn" [routerLink]="['/create/create4']">Next</button>
    </form>
  `,
  styles: []
})
export class Create3Component implements OnInit, OnDestroy {
  private subscription: Subscription; //needed to revent memory leak on destroy
  droplet: Droplet;
  content: String;
  index: Number;

  constructor(
    private dropletService: DropletService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => this.index = param['index']
    );
  }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //prevents memory leaks from observable
  }

  addExplanation(explanation, index) {
    if (index) {
      this.droplet.explanations[index] = explanation;
    } else {
      this.droplet.explanations.push(explanation); //note explanation is an object
    }
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.dropletService.pushDroplet(this.droplet);
    this.content = ''; //empty form field
    if (index) { this.router.navigate(['create/create3']) }
  }

}
