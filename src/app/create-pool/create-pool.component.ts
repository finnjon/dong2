import { Component, OnInit } from '@angular/core';
import { Pool } from '../pool';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HttpService } from '../http.service';
import { PoolService } from '../pool.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-create-pool',
  templateUrl: './create-pool.component.html',
  styleUrls: ['./create-pool.component.css']
})
export class CreatePoolComponent implements OnInit {
  pool: Pool;
  searchResults: any;
  focussed = false;
  tag: String;

  constructor(
    private poolService: PoolService,
    private httpService: HttpService,
    private flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    this.pool = this.poolService.getCurrentPool();
    console.log(this.pool);
    this.poolService.pushedPool.subscribe(pool => this.pool = pool);
  }

  onSubmit(data) {
    console.log(data);
    this.pool.name = data.name;
    this.pool.description = data.description;
    this.httpService.savePool(this.pool)
      .subscribe(
        (pool: Pool) => {
          this.poolService.updateCurrentPool(pool);
        },
        (error) => {
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        },
        () => {
          this.flashMessagesService.show('Name and description updated', { cssClass: 'alert-success', timeout: 2000 });
        }
      );
  }

  addTag(tag) {
    tag.created_at = new Date().toJSON();
    this.pool.tags.push(tag);
    this.httpService.savePool(this.pool)
      .subscribe(
        (pool: Pool) => this.poolService.updateCurrentPool(pool),
        (error) => this.flashMessagesService.show('An error occurred!', { cssClass: 'alert-success', timeout: 2000 }),
        () => this.flashMessagesService.show('Tags updated', { cssClass: 'alert-success', timeout: 2000 })
      );
    this.tag = ''; //empty form field
  }

  onSearch(query) {
    this.httpService.searchPools(query)
      .subscribe(
        (data: Response) => {
          this.searchResults = data.json();
      });
  }

  onFocus(){
    this.focussed = true;
  }
}
