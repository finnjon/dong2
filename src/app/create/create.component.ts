import { Component, OnInit } from '@angular/core';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  dropletId: Number;
  droplet: Droplet;

  constructor(private dropletService: DropletService) { }

  ngOnInit() {
    this.droplet = this.dropletService.getCurrentDroplet();
  }



}
