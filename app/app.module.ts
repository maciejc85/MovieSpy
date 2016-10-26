import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { routing, appRoutingProviders } from "./app.routes";
import { FormsModule } from "@angular/forms";

import { AppComponent }  from "./app.component";
import { TopnavComponent } from "./components/topnav/topnav";
import { HomeComponent } from "./components/home/home";
import { SearchComponent } from "./components/search/search";
import { DetailsComponent } from "./components/details/details";
import { DashboardComponent } from "./components/dashboard/dashboard";
import { TileComponents } from './components/tile/tile';

import { CustomersModule } from './components/customers/customers.module';

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpModule, CustomersModule],
  declarations: [ AppComponent, 
                  TopnavComponent,
                  HomeComponent,
                  SearchComponent,
                  DetailsComponent,
                  DashboardComponent,
                  TileComponents ],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders]
})
export class AppModule { }