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
  searchDropletResults: any;
  focussed = false;
  tag: String;
  showBasics = true;
  displayDescription = null;

  constructor(
    private poolService: PoolService,
    private httpService: HttpService,
    private flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    this.pool = this.poolService.getCurrentPool();
    this.poolService.pushedPool.subscribe(pool => this.pool = pool);
  }

  onSubmit(data) {
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

  searchDroplets(query) {
    this.httpService.searchDroplets(query)
      .subscribe(
        (data: Response) => {
          this.searchDropletResults = data.json();
      });
  }

  addToPool(droplet) {
    var date = new Date().toJSON();
    var addedDroplet = {
      dropletId: droplet._id,
      name: droplet.name,
      description: droplet.description,
      added_at: date,
    }
    this.pool.droplets.push(addedDroplet);
    this.httpService.savePool(this.pool)
      .subscribe(
        (pool: Pool) => {
          this.poolService.updateCurrentPool(pool);
        },
        (error) => {
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        },
        () => {
          this.flashMessagesService.show('Droplet added to pool', { cssClass: 'alert-success', timeout: 2000 });
        }
      );
  }

  removeDropletFromPool(index) {
    this.pool.droplets.splice(index, 1);
    this.httpService.savePool(this.pool)
      .subscribe(
        (pool: Pool) => {
          this.poolService.updateCurrentPool(pool);
        },
        (error) => {
          this.flashMessagesService.show('An error occurred', { cssClass: 'alert-success', timeout: 2000 });
        },
        () => {
          this.flashMessagesService.show('Droplet removed from pool', { cssClass: 'alert-success', timeout: 2000 });
        }
      );
  }

  onFocus(){
    this.focussed = true;
  }

  showDescription(index) {
    if (this.displayDescription === index) {
      this.displayDescription = null;
    } else {
      this.displayDescription = index;
    }
  }
}
