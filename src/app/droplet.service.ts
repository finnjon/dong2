import { Injectable, EventEmitter } from '@angular/core';
import { Droplet } from './droplet';

@Injectable()
export class DropletService {
  pushedDroplet = new EventEmitter<Droplet>();
  private droplet: Droplet = new Droplet("draft", "Unnamed", "Empty", [], [], []);

  constructor() { }

  getCurrentDroplet() {
    return this.droplet;
  }

  updateCurrentDroplet(droplet: Droplet) {
    this.droplet = droplet;
  }

  pushDroplet(droplet: Droplet) {
    this.pushedDroplet.emit(droplet);
  }

}
