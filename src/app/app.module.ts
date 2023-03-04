import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentOne } from './component-one/component-one';

@NgModule({
  declarations: [
    ComponentOne
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class AppModule { }
