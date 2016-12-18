import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-2',
  template: `
    <h4>Step 2</h4>
    <div>Now give your droplet a name and description, together with some keywords</div>
    <br>
    <form>
      <div class="form-group">
        <label>Name: <small>(required)</small></label>
        <input class="form-control" name="name" type="text" class="form-control" placeholder="Add a clear and unique name" required>
      </div>
      <div class="form-group">
        <label>Description: <small>(required)</small></label>
        <textarea class="form-control" rows="3" name="description" placeholder="Add helpful description of what this droplet tests." required></textarea>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  `,
  styles: []
})
export class Create2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
