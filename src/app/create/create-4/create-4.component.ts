import { Component, OnInit } from '@angular/core';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';

@Component({
  selector: 'app-create-4',
  template: `
    <h4>Step 4</h4>
    <div>Add some questions to test understanding of this droplet.</div>
    <br>
    <form (ngSubmit)="addQuestion(f.value)" #f="ngForm">
      <div class="form-group">
        <label>Question: <small>(required)</small></label>
        <textarea class="form-control" rows="3" [(ngModel)]="question.prompt" name="prompt" placeholder="Add a question here." required></textarea>
      </div>
      <div class="form-group">
        <label>Answer: <small>(required)</small></label>
        <input class="form-control" [(ngModel)]="question.answer" name="answer" type="text" placeholder="Answer" required>
      </div>
      <div class="form-group">
        <label>Filled Answer:</label>
        <input class="form-control" [(ngModel)]="question.filledAnswer" name="filledAnswer" type="text" class="form-control" placeholder="If you would like to pre-fill the answer field, do so here">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
      <button class="btn btn-large" [routerLink]="['/create/create2']">Next</button>
    </form>
  `,
  styles: []
})
export class Create4Component implements OnInit {
  droplet: Droplet;
  //prompt: String;
  question = {};

  constructor(private dropletService: DropletService) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  addQuestion(question) {
    this.question = question;
    this.droplet.questions.push(this.question);
    console.log(this.droplet);
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.dropletService.pushDroplet(this.droplet);
    this.question = {};
  }

}
