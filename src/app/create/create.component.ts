import { Component, OnInit } from '@angular/core';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
import { Auth } from '../auth.service';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  droplet: Droplet;
  newDroplet = true;
  profile: any;
  role: String;

  constructor(
    private dropletService: DropletService,
    private httpService: HttpService,
    public auth: Auth
  ) {
    this.profile = this.auth.userProfile;
    this.role = this.auth.role;
    this.droplet = this.dropletService.getCurrentDroplet();
  }

  ngOnInit() {
    if (this.droplet._id){ this.newDroplet = false; }
  }
}
