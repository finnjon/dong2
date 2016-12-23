import { Component, OnInit, Input } from '@angular/core';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';

@Component({
  selector: 'app-show-droplet',
  template: `
    <h3>{{ droplet.name || "New Droplet" }} <span class="label label-success">{{ droplet.status || "draft" }}</span></h3>
    <div>Description: {{ droplet.description || "empty" }}</div>
    <h4>Explanations:</h4>
    <div *ngIf="droplet.explanations.length < 1">None</div>
    <div *ngFor="let explanation of droplet.explanations; let i=index">
      <div><span>{{ i+1 }}</span> {{ explanation.content }}</div>
    </div>
    <h4>Questions:</h4>
    <div *ngIf="droplet.questions.length < 1">None</div>
    <div *ngFor="let question of droplet.questions; let i=index">
      <div>{{ i+1 }}. {{ question.prompt || "empty" }} <!--<span (click)="editQuestion(question)" class="glyphicon glyphicon-pencil" aria-hidden="true"></span>--></div>
       <div>{{ question.answer || "empty" }}</div>
      <div>{{ question.filledAnswer || "empty" }}</div>
    </div>
    <h4>Hints:</h4>
    <div *ngIf="droplet.hints.length < 1">None</div>
    <div *ngFor="let hint of droplet.hints; let i=index">
      <div>{{ i+1 }}. {{ hint.hint || "empty" }}</div>
    </div>
    <h4>Tags:</h4>
    <div *ngIf="droplet.tags.length < 1">None</div>
    <button *ngFor="let tag of droplet.tags; let i=index" type="button" class="btn btn-default btn-sm" (click)="removeTag(i)">
      <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> {{ tag.tag }}
    </button>
  `,
  styles: []
})
export class ShowDropletComponent implements OnInit {
  droplet: Droplet;

  constructor(private dropletService: DropletService) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
    this.dropletService.pushedDroplet.subscribe(
      droplet => this.droplet = droplet
    )
  }

  removeTag(index) {
    this.droplet.tags.splice(index, 1);
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.dropletService.pushDroplet(this.droplet);
  }

}
