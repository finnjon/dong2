import { Component } from '@angular/core';
import { Auth } from './auth.service';
import { DropletService } from './droplet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ Auth ]
})
export class AppComponent {
  constructor(
    private auth: Auth,
    private dropletService: DropletService,
    private router: Router
  ) {}

  createNew() {
    this.dropletService.setNewDroplet();
    this.router.navigate(['create']);
  }

}
