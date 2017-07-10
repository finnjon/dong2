import { Component, OnInit } from '@angular/core';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-show-droplet',
  templateUrl: './show-droplet.component.html',
  styleUrls: ['./show-droplet.component.css']
})

export class ShowDropletComponent implements OnInit {
  droplet: Droplet;
  public: String;

  constructor(
    private dropletService: DropletService,
    private router: Router,
    private httpService: HttpService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
    this.dropletService.pushedDroplet.subscribe(droplet => this.droplet = droplet);
    this.droplet.open ? this.public = "public" : this.public = "private";
  }

  removeElement(index, element) {
    let dummy = this.droplet; //use dummy to ensure droplet is only updated after response from server.
    if (element === "explanation") {
      this.router.navigate(['create/create3']);
      dummy.explanations.splice(index, 1);
    } else if (element === "question") {
      this.router.navigate(['create/create4']);
      dummy.questions.splice(index, 1);
    } else if (element === "hint") {
      this.router.navigate(['create/create5']);
      dummy.hints.splice(index, 1);
    } else if (element === "tag") {
      dummy.tags.splice(index, 1);
    }
    this.httpService.saveDroplet(dummy)
      .subscribe(
        (droplet: Droplet) => this.dropletService.updateCurrentDroplet(droplet),
        (error) => this.flashMessagesService.show('I am sorry, something went wrong', { cssClass: 'alert-success', timeout: 2000 }),
        () => this.flashMessagesService.show('You have successfully removed this ' + element, { cssClass: 'alert-success', timeout: 2000 })
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

  submitForReview(submissionType) {
    if (submissionType === "submit") {
      this.droplet.verified = "submitted";
    } else if (submissionType === "resubmit") {
      this.droplet.verified = "resubmitted";
    }
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => this.dropletService.updateCurrentDroplet(droplet),
        (error) => this.flashMessagesService.show('Sumbission failed', { cssClass: 'alert-success', timeout: 2000 }),
        () => this.flashMessagesService.show('Droplet submitted for review', { cssClass: 'alert-success', timeout: 2000 })
      );
  }

  //note, once a droplet is made public it cannot be made private again because people may be using it.
  makePublic() {
    this.droplet.open = true;
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => this.dropletService.updateCurrentDroplet(droplet),
        (error) => this.flashMessagesService.show('An error occurred: the droplet could not be made public', { cssClass: 'alert-success', timeout: 2000 }),
        () => this.flashMessagesService.show('Droplet now public', { cssClass: 'alert-success', timeout: 2000 })
      );
  }

  tracking(index, item) {
    return item._id;
  }

}
