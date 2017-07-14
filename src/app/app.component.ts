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
    console.log('initialising app component');
    if (this.auth.isAuthenticated()) {
      console.log('authenticated');
      if (!this.auth.userProfile) {
        console.log('fetching profile');
        this.auth.getProfile();
      }
      console.log('going to dashboard');
      this.router.navigate(['dashboard']);
    } else {
      console.log('user not authenticated');
    }
  }

}
