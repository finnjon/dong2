import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-create-5',
  template: `
    <h4>Step 5</h4>
    <div>Create hints that will help jog students' memories as they try to answer questions.</div>
    <br>
    <form (ngSubmit)="addHint(f.value, index)" #f="ngForm">
      <div class="form-group">
        <label>Hint: <small>(required)</small></label>
        <textarea id="hint" *ngIf="index" class="form-control" rows="3" [(ngModel)]="droplet.hints[index].content" name="content" placeholder="Add a hint." required></textarea>
        <textarea id="hint" *ngIf="!index" class="form-control" rows="3" [(ngModel)]="content" name="content" placeholder="Add a hint." required></textarea>
      </div>
      <div class="advice">
        <p>Hinty hint.</p>
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
  content: String;
  index: Number;

  constructor(
    private dropletService: DropletService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => this.index = param['index']
    );
  }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  ngAfterViewChecked() {
    let el = document.getElementById('hint');
    if (el) { el.focus(); }
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
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        }
      );
    this.content = ''; //empty form field
    if (index) { this.router.navigate(['create/create5']) }
  }

}
