import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { OrdersComponent }  from './orders';

@NgModule({
  imports: [],
  declarations: [
    OrdersComponent
  ],
  bootstrap: [ OrdersComponent ]
})
export class OrderModule { }