import { Component, OnInit, Input } from '@angular/core';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';

@Component({
  selector: 'app-show-droplet',
  template: `
    <h3>Droplet Details <span class="label label-success">{{ droplet.status || "draft" }}</span></h3>
    <div>Name: {{ droplet.name || "empty" }}</div>
    <div>Description: {{ droplet.description || "empty" }}</div>
    <h4>Explanations:</h4>
    <div *ngFor="let explanation of droplet.explanations; let i=index">
      <div><span>{{ i+1 }}</span> {{ explanation.content }}</div>
    </div>
    <h4>Questions:</h4>
    <div *ngFor="let question of droplet.questions; let i=index">
      <div>{{ i+1 }}. {{ question.prompt || "empty" }} <!--<span (click)="editQuestion(question)" class="glyphicon glyphicon-pencil" aria-hidden="true"></span>--></div>
       <div>{{ question.answer || "empty" }}</div>
      <div>{{ question.filled_answer || "empty" }}</div>
    </div>
    <!--<h4>Helps:</h4>
    <div *ngFor="let help of droplet.helps; let i=index">
      <div>{{ i+1 }}. {{ help.category || "empty" }}</div>
      <div>{{ help.content || "empty" }}</div>
    </div> -->
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

}
