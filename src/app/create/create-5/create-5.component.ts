import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-create-5',
  template: `
    <h4>Step 5</h4>
    <div>Create hints that will help jog students' memories as they try to answer questions.</div>
    <br>
    <form (ngSubmit)="addHint(f.value, index)" #f="ngForm">
      <div class="form-group">
        <label>Hint: <small>(required)</small></label>
        <textarea id="hint" *ngIf="index" class="form-control" rows="3" [(ngModel)]="droplet.hints[index].hint" name="hint" placeholder="Add a hint." required></textarea>
        <textarea id="hint" *ngIf="!index" class="form-control" rows="3" [(ngModel)]="hint" name="hint" placeholder="Add a hint." required></textarea>
      </div>
      <button type="submit" class="btn btn-default">
        <span *ngIf="index">Update Hint</span>
        <span *ngIf="!index">Add Hint</span>
      </button>
      <button class="btn" [routerLink]="['/create/create6']">Next</button>
    </form>
  `,
  styles: []
})
export class Create5Component implements OnInit, OnDestroy, AfterViewChecked {
  private subscription: Subscription; //needed to revent memory leak on destroy
  droplet: Droplet;
  hint: String;
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
    this.dropletService.pushedDroplet.subscribe(
      () => document.getElementById('hint').focus()
    )
  }

  ngAfterViewChecked() { //sets focus if not set
    setTimeout(function(){
      document.getElementById('hint').focus();
    }, 500);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //prevents memory leaks from observable
  }

  addHint(hint, index) {
    if (index) {
      this.droplet.hints[index] = hint;
    } else {
      this.droplet.hints.push(hint); //note hint is an object
    }
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.dropletService.pushDroplet(this.droplet);
    this.hint = ''; //empty form field
    if (index) { this.router.navigate(['create/create5']) }
  }

}
