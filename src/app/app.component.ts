import { Component, OnInit } from '@angular/core';
import { DropletService } from './droplet.service';
import { Router } from '@angular/router';
import { Auth } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  profile: any;

  constructor(
    public auth: Auth,
    private dropletService: DropletService,
    private router: Router
  ) {
    //auth.handleAuthentication();
  }

  ngOnInit() {

  }

  createNew() {
    this.dropletService.setNewDroplet();
    this.router.navigate(['create']);
  }

}
