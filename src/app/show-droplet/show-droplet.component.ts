import { Component, OnInit } from '@angular/core';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-droplet',
  templateUrl: './show-droplet.component.html',
  styles: [`
    .explanation, .question, .hint {
      background-color: rgba(255, 235, 59, 0.54);
      border: 1px solid transparent;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 5px;
      margin-left: 15px;
    }
    .droplet-name {
      font-size: 24px;
      font-weight: bold;
    }
    .progress-marker {
      margin-left: 5px;
      display: inline-block;
      background-color: #d9534f;
	    border-radius: 50%;
	    width: 12px;
	    height: 12px;
    }
    .complete {
      background-color: green;
    }
  `]
})
export class ShowDropletComponent implements OnInit {
  droplet: Droplet;

  constructor(
    private dropletService: DropletService,
    private router: Router,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
    this.dropletService.pushedDroplet.subscribe(
      droplet => this.droplet = droplet
    )
  }

  removeElement(index, element) {
    console.log("remove clicked");
    let dummy = this.droplet;
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
        (droplet: Droplet) => {
          this.dropletService.updateCurrentDroplet(droplet);
        }
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
    console.log("select exp clicked");
    this.router.navigate(['create/create3', index]);
  }

  selectQuestion(index) {
    console.log("rselect q clicked");
    this.router.navigate(['create/create4', index]);
  }

  selectHint(index) {
    console.log("select hint clicked");
    this.router.navigate(['create/create5', index]);
  }

  tracking(index, item) {
    console.log(index);
    console.log(item);
    console.log(item._id);
    return item._id;
  }

}
