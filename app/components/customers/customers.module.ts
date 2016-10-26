import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { CustomersComponent }  from './customers';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    CustomersComponent
  ],
  bootstrap: [ CustomersComponent ]
})
export class CustomersModule { }