import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create-5',
  template: `
    <div>Create hints that will help jog students' memories as they try to answer questions.</div>
    <br>
    <form (ngSubmit)="addHint(f.value, index)" #f="ngForm">
      <div class="form-group">
        <label>Hint: <small>(required)</small></label>
        <quill-editor
          id="hint"
          *ngIf="index"
          [(ngModel)]="droplet.hints[index].content"name="content"
          placeholder="Add a hint."
          (onEditorCreated)="setFocus($event)"
          [modules]="{
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['code-block', 'clean']
            ]
          }"
          required></quill-editor>
        <quill-editor
          id="hint"
          *ngIf="!index"
          [(ngModel)]="content"
          name="content"
          placeholder="Add a hint."
          (onEditorCreated)="setFocus($event)"
          [modules]="{
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['code-block', 'clean']
            ]
          }"
          required></quill-editor>
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
    let el = document.getElementById('hint');
    if (el) { el.focus(); }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //prevents memory leaks from observable
  }

  addHint(hint, index) {
    if (index) { //if updating
      this.droplet.hints[index].updated_at = new Date().toJSON();
      this.droplet.hints[index].content = hint.content;
    } else { //if new one
      hint.created_at = new Date().toJSON();
      hint.updated_at = new Date().toJSON();
      this.droplet.hints.push(hint);
    }
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => this.dropletService.updateCurrentDroplet(droplet),
        (error) => this.flashMessagesService.show('An error occurred!', { cssClass: 'alert-success', timeout: 2000 }),
        () => this.flashMessagesService.show('Hint updated', { cssClass: 'alert-success', timeout: 2000 })
      );
    this.content = ''; //empty form field
    if (index) { this.router.navigate(['create/create5']) }
  }

  setFocus($event) {
    $event.focus();
  }

}
