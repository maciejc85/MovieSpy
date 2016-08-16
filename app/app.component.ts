import { Component } from "@angular/core";

import {SidenavComponent } from './components/sidenav/sidenav';

@Component({
  selector: "my-app",
  template: "<h1>Movie Spy seed</h1>" +
            "<sidenav></sidenav>",
  directives: [ SidenavComponent ]
})
export class AppComponent {
  constructor() { };

  x: any = 1;

}