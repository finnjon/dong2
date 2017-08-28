const assert = require('assert');
const Pool = require('../server/models/poolModel');

describe('Creating records', () => {
  it('saves a pool', (done) => {
    const pool = new Pool({ name: 'Test Pool' });
    pool.save()
      .then(() => {
        assert(!pool.isNew);
        done();
      });    
  });
});