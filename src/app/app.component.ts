import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './auth.service';
import { Droplet } from './droplet';
import { DropletService } from './droplet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck {
  nickname: String;
  role: String;

  constructor(
    public auth: Auth,
    private router: Router,
    private dropletService: DropletService
  ) {}

  ngDoCheck() { //def not efficient
    if (this.auth.userProfile) {
      this.nickname = this.auth.userProfile.nickname;
      this.role = this.auth.role;
    }
  }

  goToCreate() {
    this.dropletService.setNewDroplet();
    this.router.navigate(['/create']);
  }

}
