import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDroplets;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getUserDroplets()
      .subscribe(
        (data: Response) => {
          console.log(data);
          this.userDroplets = data.json();
      });
  }

}
