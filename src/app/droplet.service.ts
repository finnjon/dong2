import { Injectable, EventEmitter } from '@angular/core';
import { Droplet } from './droplet';

@Injectable()
export class DropletService {
  pushedDroplet = new EventEmitter<Droplet>();
  private droplet: Droplet = new Droplet("draft", "", "", [], [], [], []);

  constructor() { }

  getCurrentDroplet() {
    return this.droplet;
  }

  setNewDroplet() {
    this.droplet = new Droplet("draft", "", "", [], [], [], []);
    this.setCurrentDroplet(this.droplet);
  }

  setCurrentDroplet(droplet) {
    this.droplet = droplet;
    this.pushDroplet(droplet);
  }

  updateCurrentDroplet(droplet: Droplet) {
    this.droplet = droplet;
  }

  pushDroplet(droplet: Droplet) {
    this.pushedDroplet.emit(droplet);
  }

}
