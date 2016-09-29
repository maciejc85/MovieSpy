import { Component } from "@angular/core";

import {TopnavComponent } from "./components/topnav/topnav";
import { SearchService } from "./components/search/search.service";

@Component({
  selector: "my-app",
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [SearchService]
})
export class AppComponent {
  constructor() { };

  x: any = 2;

}