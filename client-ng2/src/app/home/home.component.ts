import { Component } from '@angular/core';
import { HomeService } from "./home.service.ts";
declare var __ :any;

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    HomeService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  private name = "";
  private data;
  private message;
  private greet = __("Welcome to Awesome Framework.");
  //console.log(jQuery);
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(private _homeService:HomeService) {
       this.message =  __('Hello');
  }

  ngOnInit() {
    console.log('hello Home component');
   
    this._homeService.getUserData().subscribe(
        responseData => { 
          this.name = responseData.name;
          //console.log(responseData);
        });
  }

  
}
