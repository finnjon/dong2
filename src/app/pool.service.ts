import { Injectable, EventEmitter } from '@angular/core';
import { Pool } from './pool';
import { Auth } from './auth.service';

@Injectable()
export class PoolService {
  pushedPool = new EventEmitter<Pool>();
  pool: any;

  constructor(
    private auth: Auth
  ) { }

  getCurrentPool() {
    if (this.pool) {
      return this.pool;
    } else {
      this.pool = this.setNewPool();
    }
  }

  setNewPool() {
    this.pool = new Pool(
      "", //name
      "", //description
      this.auth.userProfile["sub"], //user_id
      new Date().toJSON(), //created_at
      new Date().toJSON(), //updated_at
      "draft", //status
      "english", //language
      [], //tags
      [], //droplet id's
      false //open
    );
    this.setCurrentPool(this.pool);
  }

  setCurrentPool(pool) {
    this.pool = pool;
    this.pushPool(pool);
  }

  updateCurrentPool(pool: Pool) {
    this.pool = pool;
    this.pushPool(pool);
  }

  pushPool(pool: Pool) {
    this.pushedPool.emit(pool);
  }

}
