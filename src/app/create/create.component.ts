import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked  } from '@angular/core';
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

  // ngOnChanges() { console.log("on changes");}
  // ngDoCheck() { console.log("do check");}
  // ngAfterContentInit() { console.log("after content init");}
  // ngAfterContentChecked() { console.log("after content checked");}
  // ngAfterViewInit() { console.log("after view init");}
  // ngAfterViewChecked() { console.log("after view chcked");}



}
