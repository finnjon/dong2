import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(
    public auth: Auth,
  ) {
    console.log('authenticating in callback component')
    auth.handleAuthentication();
  }

  ngOnInit() {}

}
