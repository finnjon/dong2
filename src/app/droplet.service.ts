import { Injectable, EventEmitter } from '@angular/core';
import { Droplet } from './droplet';
import { Auth } from './auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class DropletService {
  pushedDroplet = new EventEmitter<Droplet>();
  droplet: any;

  constructor(
    private auth: Auth,
    private flashMessagesService: FlashMessagesService
  ) {}

  getCurrentDroplet() {
    if (this.droplet) {
      return this.droplet;
    } else {
      this.droplet = this.setNewDroplet();
    }
  }

  setNewDroplet() {
    this.droplet = new Droplet(
      "", //name
      "", //description
      this.auth.userProfile["sub"], //user_id
      "", //editor
      new Date().toJSON(), //created_at
      new Date().toJSON(), //updated_at
      "draft", //status
      false, //verified
      "", //language
      false, //open
      [], //tags
      [], //hints
      [], //explanations
      [] //questions
    );
    this.setCurrentDroplet(this.droplet);
  }

  setCurrentDroplet(droplet) {
    this.droplet = droplet;
    this.pushDroplet(droplet);
  }

  updateCurrentDroplet(droplet: Droplet) {
    this.droplet = droplet;
    this.flashMessagesService.show('Droplet updated!', { cssClass: 'alert-success', timeout: 2000 });
    this.pushDroplet(droplet);
  }

  pushDroplet(droplet: Droplet) {
    this.pushedDroplet.emit(droplet);
  }

}
