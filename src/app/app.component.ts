import { Component, OnInit } from '@angular/core';
import { Auth } from './auth.service';
import { DropletService } from './droplet.service';
import { Router } from '@angular/router';

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
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  createNew() {
    this.dropletService.setNewDroplet();
    this.router.navigate(['create']);
  }

}
