import { Component } from '@angular/core';
import { Auth } from './auth.service';
import { DropletService } from './droplet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    public auth: Auth,
    private dropletService: DropletService,
    private router: Router
  ) {
    auth.handleAuthentication();
  }

  createNew() {
    this.dropletService.setNewDroplet();
    this.router.navigate(['create']);
  }

}
