import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HTTP_PROVIDERS } from '@angular/http';


import { AppComponent }  from "./app.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }