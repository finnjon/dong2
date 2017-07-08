import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';
import { HttpService } from '../http.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  droplet: Droplet;
  error: any;
  showEdit: any;

  constructor(
    private router: Router,
    private dropletService: DropletService,
    private httpService: HttpService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
    this.dropletService.pushedDroplet.subscribe(
      droplet => this.droplet = droplet
    )
    if (!this.droplet.comments) {this.droplet.comments = {};}
  }

  addComment(comment, field, index) {
    if (!this.droplet.comments) {this.droplet.comments = {};} //some old bits don't have comments
    this.droplet.comments[field] = comment.comment;
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        },
        (error) => {
          this.error = error;
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        },
        () => {
          this.flashMessagesService.show('Comment added', { cssClass: 'alert-success', timeout: 2000 });
          this.toggleMe(field, index);
        }
      );
  }

  addCommentMulti(comment, field, index) {
    this.droplet[field][index].comment = comment.comment;
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        },
        (error) => {
          this.error = error;
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        },
        () => {
          this.flashMessagesService.show('Comment added', { cssClass: 'alert-success', timeout: 2000 });
          this.toggleMe(field, index);
        }
      );
  }

  removeComment(multi, field, index) {
    if (!multi) { this.droplet.comments[field] = ""; }
    else { this.droplet[field][index].comment = ""; }

    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        },
        (error) => {
          this.error = error;
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        },
        () => this.flashMessagesService.show('Comment removed', { cssClass: 'alert-success', timeout: 2000 })
      );
  }

  alertAuthor() {
    this.droplet.verified = "review complete";
    this.httpService.saveDroplet(this.droplet)
      .subscribe(
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
          this.flashMessagesService.show('Author alerted', { cssClass: 'alert-success', timeout: 2000 });
        },
        (error) => {
          this.error = error;
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        },
        () => this.router.navigate(['/dashboard'])
      );
  }

  //Notes on toggling. In order to toggle visibility we use the field and the index, which are passed in the click handler. By adding them together we can create a variable that combines them to provide a unique id for the field, even if there are many. This is what is toggled.
  toggleMe(field, index) {
    if (this.showEdit !== field + index) {
      this.showEdit = field + index;
    } else {
      this.showEdit = field;
    }
  }
}
