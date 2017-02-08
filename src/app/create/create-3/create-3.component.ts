import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-3',
  template: `
    <div>Give a clear explanation to help students understand the droplet being tested.</div>
    <br>
    <form (ngSubmit)="addExplanation(f.value, index)" #f="ngForm">
      <div class="form-group">
        <label>Explanation: <small>(required)</small></label>
        <textarea id="explanation" *ngIf="index" class="form-control" rows="3" [(ngModel)]="droplet.explanations[index].content" name="content" placeholder="Add an explanation of the content this droplet tests." required autofocus></textarea>
        <textarea id="explanation" *ngIf="!index" class="form-control" rows="3" [(ngModel)]="content" name="content" placeholder="Add an explanation of the content this droplet tests." required autofocus></textarea>
      </div>
      <div class="advice">
        <p>How would you explain this droplet to a student? Make sure you write plainly and do not make sure to direct students to other resources if additional concepts are required.</p>
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
export class Create3Component implements OnInit, OnDestroy, AfterViewChecked {
  private routeSubscription: Subscription; //needed to prevent memory leak on destroy
  droplet: Droplet;
  content: String;
  index: Number;

  constructor(
    private dropletService: DropletService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private flashMessagesService: FlashMessagesService
  ) {
    this.routeSubscription = this.activatedRoute.params.subscribe(
      (param: any) => this.index = param['index']
    );
  }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
    this.dropletService.pushedDroplet.subscribe(
      droplet => this.droplet = droplet
    )
  }

  ngAfterViewChecked() {
    let el = document.getElementById('explanation');
    if (el) { el.focus(); }
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe(); //prevents memory leaks from observable
  }

  //note here if the explanation has an index it exists already in which case I only update the relevant field because otherwise the whole object is transformed and I lose all the other data.
  addExplanation(explanation, index) {
    if (index) {
      this.droplet.explanations[index].updated_at = new Date().toJSON();
      this.droplet.explanations[index].content = explanation.content; //prevent ovveride
    } else {
      explanation.created_at = new Date().toJSON();
      explanation.updated_at = new Date().toJSON();
    }
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        },
        (error) => {
          this.flashMessagesService.show('An error occurred!', { cssClass: 'alert-success', timeout: 2000 });
        },
        () => this.droplet.explanations.push(explanation)
      );
    this.content = ''; //empty form field
    if (index) { this.router.navigate(['create/create3']) }
  }

}
