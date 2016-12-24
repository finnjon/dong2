import { Component, OnInit, Input } from '@angular/core';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';
import { Router } from '@angular/router';

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
        <div class="droplet-name" (click)="editThis('name')">{{ droplet.name || "New Droplet (Unnamed)" }}
        </div>
      </div>
    </div>

    <div *ngIf="droplet.description" class="row">
      <div class="col-md-10" (click)="editThis('description')">
        <h5>{{ droplet.description || "empty" }}</h5>
      </div>
    </div>

    <h4>Explanations:</h4>
    <div *ngIf="droplet.explanations.length < 1">None</div>
    <div class="row" *ngFor="let explanation of droplet.explanations; let i=index">
      <div class="explanation col-md-11" (click)="selectExplanation(i)">{{ explanation.content }}
        <span (click)="removeElement(i, 'explanation')" class="pull-right glyphicon glyphicon-remove" aria-hidden="true"></span>
      </div>
    </div>

    <h4>Questions:</h4>
    <div *ngIf="droplet.questions.length < 1">None</div>
    <div class="row" *ngFor="let question of droplet.questions; let i=index">
      <div class="question col-md-10" (click)="selectQuestion(i)">
        <div>{{ question.prompt || "empty" }}</div>
        <div>{{ question.answer || "empty" }}</div>
        <div>{{ question.filledAnswer || "empty" }}</div>
      </div>
      <div class="col-md-2">
        <span (click)="removeElement(i, 'question')" class="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </div>
    </div>

    <h4>Hints:</h4>
    <div *ngIf="droplet.hints.length < 1">None</div>
    <div class="row" *ngFor="let hint of droplet.hints; let i=index">
      <div class="hint col-md-10" (click)="selectHint(i)">{{ hint.hint || "empty" }}</div>
      <div class="col-md-2">
        <span (click)="removeElement(i, 'hint')" class="glyphicon glyphicon-remove" aria-hidden="true"></span>
      </div>
    </div>

    <h4>Tags:</h4>
    <div *ngIf="droplet.tags.length < 1">None</div>
    <button *ngFor="let tag of droplet.tags; let i=index" type="button" class="btn btn-default btn-sm" (click)="removeElement(i, 'tag')">
      <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> {{ tag.tag }}
    </button>
  `,
  styles: [`
    .explanation, .question, .hint {
      border: 1px solid black;
      padding: 10px; margin-bottom: 5px;
    }
    .droplet-name {
      font-size: 24px;
      font-weight: bold;
    }
  `]
})
export class ShowDropletComponent implements OnInit {
  droplet: Droplet;

  constructor(
    private dropletService: DropletService,
    private router: Router
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
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.dropletService.pushDroplet(this.droplet);
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
