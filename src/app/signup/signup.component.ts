import { Component } from '@angular/core';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    public auth: Auth,
  ) { }
}
