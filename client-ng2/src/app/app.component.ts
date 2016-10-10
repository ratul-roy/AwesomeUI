/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,

  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
  //providers: []
})
export class App {
  

  constructor() {

  }

  ngOnInit() {
    console.log('Initial App State');
  }

}

