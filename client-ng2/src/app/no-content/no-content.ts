import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
    <div class="page-header"> </div>
        <h1>{{message}} {{name}}</h1>
  `
})
export class NoContent {

}
