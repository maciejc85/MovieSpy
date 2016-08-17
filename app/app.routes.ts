import { Routes, RouterModule }   from '@angular/router';
import {HomeComponent} from "./components/home/home"

const appRoutes: Routes = [
 { path: 'home', component: HomeComponent },
  {
    path: 'route1',
    component: HomeComponent,
    data: {
      title: 'route1 List'
    }
  },
  { path: 'route1/:id', component: HomeComponent },
  { path: '**', component: HomeComponent }
];


export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);