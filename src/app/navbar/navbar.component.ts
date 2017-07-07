import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';
import { Router } from '@angular/router';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profile: any;

  constructor(
    public auth: Auth,
    private router: Router,
    private dropletService: DropletService
  ) { }

  ngOnInit() {
    this.auth.pushedProfile.subscribe(
      profile => this.profile = profile
    )
  }

  goToCreate() {
    this.dropletService.setNewDroplet();
    this.router.navigate(['/create']);
  }

}
