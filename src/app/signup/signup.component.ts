import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    public auth: Auth,
    private router: Router
  ) { }

  ngOnInit() {
    //if a user is authenticated and they have a userProfile ...
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
