import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Droplet } from '../../droplet';
import { DropletService } from '../../droplet.service';

@Component({
  selector: 'app-create-2',
  template: `
    <h4>Step 2</h4>
    <div>Now give your droplet a name and description, together with some keywords</div>
    <br>
    <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
      <div class="form-group">
        <label>Name: <small>(required)</small></label>
        <input class="form-control" name="name" type="text" class="form-control" placeholder="Add clear and unique name" ngModel required>
      </div>
      <div class="form-group">
        <label>Description: <small>(required)</small></label>
        <textarea class="form-control" rows="3" name="description" placeholder="Add helpful description of what this droplet tests." ngModel required></textarea>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  `,
  styles: []
})
export class Create2Component implements OnInit {
  isNew = true;
  droplet: Droplet;

  constructor(private dropletService: DropletService) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  onSubmit(droplet: Droplet){
    if (!this.isNew) {
      console.log(droplet.name);
    } else {
      this.droplet.name = droplet.name;
      this.droplet.description = droplet.description;
      console.log(this.droplet);
      this.dropletService.updateCurrentDroplet(droplet);
      this.dropletService.pushDroplet(droplet);
    }
  }
}
