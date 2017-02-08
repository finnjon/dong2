import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-4',
  template: `
    <div>Add some questions to test understanding of this droplet.</div>
    <br>
    <form (ngSubmit)="addQuestion(f.value, index)" #f="ngForm">
      <div class="form-group">
        <label>Question: <small>(required)</small></label>
        <textarea id="question" *ngIf="index" class="form-control" rows="3" [(ngModel)]="droplet.questions[index].prompt" name="prompt" placeholder="Add a question here." (focus)="onFocus('question')" required></textarea>
        <textarea id="question" *ngIf="!index" class="form-control" rows="3" [(ngModel)]="question.prompt" name="prompt" placeholder="Add a question here." (focus)="onFocus('question')" required></textarea>
      </div>
      <div *ngIf="focussed === 'question'" class="advice">
        <p>Add a question and .....</p>
      </div>
      <div class="form-group">
        <label>Answer: <small>(required)</small></label>
        <input id="answer" *ngIf="index" class="form-control" [(ngModel)]="droplet.questions[index].answer" name="answer" type="text" placeholder="Answer" (focus)="onFocus('answer')" required>
        <input id="answer" *ngIf="!index" class="form-control" [(ngModel)]="question.answer" name="answer" type="text" placeholder="Answer" (focus)="onFocus('answer')" required>
      </div>
      <div *ngIf="focussed === 'answer'" class="advice">
        <p>Add an answer and .....</p>
      </div>
      <div class="form-group">
        <label>Filled Answer:</label>
        <input id="filled" *ngIf="index" class="form-control" [(ngModel)]="droplet.questions[index].filledAnswer" name="filledAnswer" type="text" class="form-control" placeholder="If you would like to pre-fill the answer field, do so here" (focus)="onFocus('filledAnswer')">
        <input id="filled" *ngIf="!index" class="form-control" [(ngModel)]="question.filledAnswer" name="filledAnswer" type="text" class="form-control" placeholder="If you would like to pre-fill the answer field, do so here" (focus)="onFocus('filledAnswer')">
      </div>
      <div *ngIf="focussed === 'filledAnswer'" class="advice">
        <p>If you would like an answer field to be pre-filled, do so here.</p>
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
  focussed = "question";

  constructor(
    private dropletService: DropletService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private httpService: HttpService,
    private flashMessagesService: FlashMessagesService
  ) {
    this.subscription = this.activatedRoute.params.subscribe(
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
    let el = document.getElementById('question');
    if ( el ) {
      setTimeout(function(){
        let focussed = document.activeElement.id;
         if (
           focussed !== ('question') &&
           focussed !== ('answer') &&
           focussed !== ('filled')
         ) { el.focus(); }
       }, 500);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //prevents memory leaks from observable
  }

  addQuestion(question, index) {
    if (index) {
      this.droplet.questions[index].updated_at = new Date().toJSON();
      this.droplet.questions[index].prompt = question.prompt;
      this.droplet.questions[index].answer = question.answer;
      this.droplet.questions[index].filledAnswer = question.filledAnswer;
    } else {
      question.created_at = new Date().toJSON();
      question.updated_at = new Date().toJSON();
    }
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        },
        (error) => {
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        },
        () => this.droplet.questions.push(question) //note explanation is an object
      );
    this.question = {};
    if (index) {
      this.router.navigate(['create/create4'])
    }
  }

  onFocus(field){
    switch (field) {
    case "question":
      this.focussed = "question";
      break;
    case "answer":
      this.focussed = "answer";
      break;
    case "filledAnswer":
      this.focussed = "filledAnswer";
      break;
    default:
      this.focussed = "";
      ;
    }
  }

}
