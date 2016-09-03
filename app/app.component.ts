import { Component } from "@angular/core";

import {TopnavComponent } from "./components/topnav/topnav";

@Component({
  selector: "my-app",
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ TopnavComponent ]
})
export class AppComponent {
  constructor() { };

  x: any = 2;

}