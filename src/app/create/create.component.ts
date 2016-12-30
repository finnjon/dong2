import { Component, OnInit, OnDestroy } from '@angular/core';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;
  droplet: Droplet;
  newDroplet = true;

  constructor(
    private dropletService: DropletService,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    //here we are getting the param if there is one. If there is it means we are editing a droplet so we fetch the droplet and set is to current. Otherwise we don't run this code.
      this.routeSubscription = this.activatedRoute.params.subscribe(
        (param: any) => {
          if (!param.id) {
            return;
          } else {
            this.httpService.getDroplet(param['id'])
            .subscribe(
              (data: Response) => {
                this.droplet = data.json();
                this.dropletService.setCurrentDroplet(this.droplet);
                this.newDroplet = false;
            })
          }
        }
      );
  }

  ngOnInit() {
    if (this.newDroplet) {
      this.dropletService.setNewDroplet();
      this.droplet = this.dropletService.getCurrentDroplet();
    } else {
      this.droplet = this.dropletService.getCurrentDroplet();
    }
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
