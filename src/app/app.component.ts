import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Auth } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(
    public auth: Auth,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('checking for next route');
    if (this.auth.isAuthenticated()) {
      if (!this.auth.userProfile) {
        this.auth.getProfile();
      }
      this.router.navigate(['dashboard']);
    } else {
      console.log('user not authenticated');
    }
  }

}
