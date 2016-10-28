import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { UserComponent }  from './user';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    UserComponent
  ],
  bootstrap: [ UserComponent ]
})
export class UserModule { }