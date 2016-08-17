import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_PROVIDERS } from "@angular/http";
import { routing, appRoutingProviders } from "./app.routes";
import { AppComponent }  from "./app.component";

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders]
})
export class AppModule { }