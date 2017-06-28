import { Component, OnInit } from '@angular/core';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  droplet: Droplet;
  newDroplet = true;

  constructor(
    private dropletService: DropletService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
    if (this.droplet._id){ this.newDroplet = false; }
  }
}
