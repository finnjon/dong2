import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-4',
  templateUrl: './create-4.component.html',
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
      this.droplet.questions.push(question);
    }
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => this.dropletService.updateCurrentDroplet(droplet),
        (error) => this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 }),
        () => this.flashMessagesService.show('Question updated', { cssClass: 'alert-success', timeout: 2000 })
      );
    this.question = {};
    if (index) {
      this.router.navigate(['create/create4'])
    }
  }

  onFocus(field){
    switch (field) {
    case "question":
      console.log("focussed on question");
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

  setFocus($event) {
    $event.focus();
  }

}
