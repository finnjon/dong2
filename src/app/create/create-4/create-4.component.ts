import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-create-4',
  template: `
    <h4>Step 4</h4>
    <div>Add some questions to test understanding of this droplet.</div>
    <br>
    <form id="questionForm" (ngSubmit)="addQuestion(f.value, index)" #f="ngForm">
      <div class="form-group">
        <label>Question: <small>(required)</small></label>
        <textarea id="question" *ngIf="index" class="form-control" rows="3" [(ngModel)]="droplet.questions[index].prompt" name="prompt" placeholder="Add a question here." required></textarea>
        <textarea id="question" *ngIf="!index" class="form-control" rows="3" [(ngModel)]="question.prompt" name="prompt" placeholder="Add a question here." required></textarea>
      </div>
      <div class="form-group">
        <label>Answer: <small>(required)</small></label>
        <input id="answer" *ngIf="index" class="form-control" [(ngModel)]="droplet.questions[index].answer" name="answer" type="text" placeholder="Answer" required>
        <input id="answer" *ngIf="!index" class="form-control" [(ngModel)]="question.answer" name="answer" type="text" placeholder="Answer" required>
      </div>
      <div class="form-group">
        <label>Filled Answer:</label>
        <input id="filled" *ngIf="index" class="form-control" [(ngModel)]="droplet.questions[index].filledAnswer" name="filledAnswer" type="text" class="form-control" placeholder="If you would like to pre-fill the answer field, do so here">
        <input  id="filled" *ngIf="!index" class="form-control" [(ngModel)]="question.filledAnswer" name="filledAnswer" type="text" class="form-control" placeholder="If you would like to pre-fill the answer field, do so here">
      </div>
      <button type="submit" class="btn btn-default">
        <span *ngIf="index">Update Question</span>
        <span *ngIf="!index">Add Question</span>
      </button>
      <button class="btn" [routerLink]="['/create/create5']">Next</button>
    </form>
  `,
  styles: []
})
export class Create4Component implements OnInit, OnDestroy, AfterViewChecked {
  private subscription: Subscription; //needed to revent memory leak on destroy
  droplet: Droplet;
  question = {};
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
      () => document.getElementById('question').focus()
    )
  }

  ngAfterViewChecked() {
    setTimeout(function(){
      if (!(document.activeElement.id === ('question') ||
          document.activeElement.id === ('answer') ||
          document.activeElement.id === ('filled'))) {
        document.getElementById('question').focus();
      }
    }, 500);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //prevents memory leaks from observable
  }

  addQuestion(question, index) {
    console.log(index);
    if (index) {
      this.droplet.questions[index] = question;
    } else {
      this.droplet.questions.push(question); //note explanation is an object
    }
    this.dropletService.updateCurrentDroplet(this.droplet);
    this.dropletService.pushDroplet(this.droplet);
    this.question = {};
    if (index) {
      console.log('navigating');
      this.router.navigate(['create/create4'])
    }
  }

}
