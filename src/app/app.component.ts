import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './auth.service';
import { Droplet } from './droplet';
import { DropletService } from './droplet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    public auth: Auth,
    private router: Router,
    private dropletService: DropletService
  ) {}

  goToCreate() {
    this.dropletService.setNewDroplet();
    this.router.navigate(['/create']);
  }

}
