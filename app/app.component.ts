import { Component } from "@angular/core";

import {SidenavComponent } from './components/sidenav/sidenav';

@Component({
  selector: "my-app",
  template: "<h1>Movie Spy seed</h1>" +
            "<sidenav></sidenav>" +
            "<router-outlet></router-outlet>",
  directives: [ SidenavComponent ]
})
export class AppComponent {
  constructor() { };

  x: any = 1;

}