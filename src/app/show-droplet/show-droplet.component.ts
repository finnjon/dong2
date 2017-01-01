import { Component, OnInit } from '@angular/core';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-droplet',
  template: `
    <div class="row">
      <div class="col-md-10">
        <h4>
          <span class="label label-primary">{{ droplet.status || "draft" }}</span>
          <span class="label label-danger">{{ droplet.open || "private" }}</span>
          <span class="label label-warning">{{ droplet.verified || "unverified" }}</span>
        </h4>
        <div class="droplet-name" (click)="editThis('name')">{{ droplet.name || "no name" }}
          <div class="progress-marker" [class.complete]="droplet.name">
        </div>
        </div>
      </div>
    </div>

    <h4>Description
      <div class="progress-marker" [class.complete]="droplet.description"></div>
    </h4>
    <div class="row">
      <div class="col-md-10" (click)="editThis('description')">
        <span>{{ droplet.description || "no description" }}</span>
      </div>
    </div>

    <h4>Explanations
      <div class="progress-marker" [class.complete]="droplet.explanations.length > 0"></div>
    </h4>
    <button class="btn btn-sm" [routerLink]="['/create/create3']">Add New</button>
    <div *ngIf="droplet.explanations.length < 1">None</div>
    <div class="row" *ngFor="let explanation of droplet.explanations; let i=index">
      <div class="explanation col-md-10" (click)="selectExplanation(i)">
        <span [innerHTML]="explanation.content || empty"></span>
        <span (click)="removeElement(i, 'explanation')" class="pull-right glyphicon glyphicon-remove" aria-hidden="true"></span>
      </div>
    </div>

    <h4>Questions
      <div class="progress-marker" [class.complete]="droplet.questions.length > 0"></div>
      <div class="progress-marker" [class.complete]="droplet.questions.length > 1"></div>
      <div class="progress-marker" [class.complete]="droplet.questions.length > 2"></div>
      <div class="progress-marker" [class.complete]="droplet.questions.length > 3"></div>
      <div class="progress-marker" [class.complete]="droplet.questions.length > 4"></div>
    </h4>
    <button class="btn btn-sm" [routerLink]="['/create/create4']">Add New</button>
    <div *ngIf="droplet.questions.length < 1">None</div>
    <div class="row" *ngFor="let question of droplet.questions; let i=index">
      <div class="question col-md-10" (click)="selectQuestion(i)">
        <div>
          <h5>Prompt:</h5>
          <span [innerHTML]="question.prompt || empty"></span>
          <span (click)="removeElement(i, 'question')" class="pull-right glyphicon glyphicon-remove" aria-hidden="true"></span>
        </div>
        <hr>
        <h5>Answer:</h5>
        <div>{{ question.answer || "empty" }}</div>
        <hr>
        <h5>Filled Answer:</h5>
        <div>{{ question.filledAnswer || "empty" }}</div>
      </div>
    </div>

    <h4>Hints (optional)</h4>
    <button class="btn btn-sm" [routerLink]="['/create/create5']">Add New</button>
    <div *ngIf="droplet.hints.length < 1">None</div>
    <div class="row" *ngFor="let hint of droplet.hints; let i=index">
      <div class="hint col-md-10" (click)="selectHint(i)">
        <span [innerHTML]="hint.content || empty"></span>
        <span (click)="removeElement(i, 'hint')" class="pull-right glyphicon glyphicon-remove" aria-hidden="true"></span>
      </div>
    </div>

    <h4>Tags
      <div class="progress-marker" [class.complete]="droplet.tags.length > 0"></div>
      <div class="progress-marker" [class.complete]="droplet.tags.length > 1"></div>
      <div class="progress-marker" [class.complete]="droplet.tags.length > 2"></div>
    </h4>
    <div *ngIf="droplet.tags.length < 1">None</div>
    <button *ngFor="let tag of droplet.tags; let i=index" type="button" class="btn btn-default btn-sm" (click)="removeElement(i, 'tag')">
      <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> {{ tag.tag }}
    </button>
    <div>
      <button class="btn btn-sm" [routerLink]="['/create/create6']">Add New</button>
    </div>
  `,
  styles: [`
    .explanation, .question, .hint {
      background-color: rgba(255, 235, 59, 0.54);
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 5px;
      margin-left: 15px;
    }
    .droplet-name {
      font-size: 24px;
      font-weight: bold;
    }
    .progress-marker {
      margin-left: 5px;
      display: inline-block;
      background-color: #d9534f;
	    border-radius: 50%;
	    width: 12px;
	    height: 12px;
    }
    .complete {
      background-color: green;
    }
  `]
})
export class ShowDropletComponent implements OnInit {
  droplet: Droplet;
  test = true;

  constructor(
    private dropletService: DropletService,
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
    this.dropletService.pushedDroplet.subscribe(
      droplet => this.droplet = droplet
    )
  }

  removeElement(index, element) {
    if (element === "explanation") {
      this.droplet.explanations.splice(index, 1);
    } else if (element === "question") {
      this.droplet.questions.splice(index, 1);
    } else if (element === "hint") {
      this.droplet.hints.splice(index, 1);
    } else if (element === "tag") {
      this.droplet.tags.splice(index, 1);
    }
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        }
      );
  }

  editThis(field) {
    if (field === "description") {
      this.router.navigate(['create/create2']);
    } else if (field === "name") {
      this.router.navigate(['create/create1']);
    }
  }

  selectExplanation(index) {
    this.router.navigate(['create/create3', index]);
  }

  selectQuestion(index) {
    this.router.navigate(['create/create4', index]);
  }

  selectHint(index) {
    this.router.navigate(['create/create5', index]);
  }

}
