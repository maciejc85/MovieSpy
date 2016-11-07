import { Routes, RouterModule }   from "@angular/router";
import {HomeComponent} from "./components/home/home";
import {DetailsComponent} from "./components/details/details";
import {DashboardComponent} from "./components/dashboard/dashboard";
import {SearchComponent} from "./components/search/search";
import { UserComponent} from "./components/user/user";
import { OrdersComponent } from "./components/orders/orders"

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "details", component: DetailsComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "orders", component: OrdersComponent },
  { path: "search", component: SearchComponent },
  {
    path: "route1",
    component: HomeComponent,
    data: {
      title: "route1 List"
    }
  },
  { path: "route1/:id", component: HomeComponent },
  { path: "**", component: HomeComponent }
];


export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);