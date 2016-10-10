import { Component } from '@angular/core';
//declare var __ :any;
@Component({
  selector: 'detail',
  templateUrl: "./detail.component.html"
})
export class Detail {
  private greet = "This Module has been lazy-loaded.";
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
