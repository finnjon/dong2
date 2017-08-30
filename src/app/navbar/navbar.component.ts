import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';
import { Router } from '@angular/router';
import { Droplet } from '../droplet';
import { DropletService } from '../droplet.service';
import { PoolService } from '../pool.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profile: any;
  error: any;

  constructor(
    public auth: Auth,
    private router: Router,
    private dropletService: DropletService,
    private poolService: PoolService
  ) {}

  ngOnInit() {
    this.auth.pushedProfile
    .subscribe(
      (profile) => { this.profile = profile; },
      (error) => this.error = error
    );
  }

  goToCreate() {
    this.dropletService.setNewDroplet();
    this.router.navigate(['/create']);
  }

  goToCreatePool() {
    this.poolService.setNewPool();
    this.router.navigate(['/create-pool']);
  }

}
