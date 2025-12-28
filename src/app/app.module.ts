import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListMessageComponent } from './components/list-message/list-message.component';
import { AddMessageComponent } from './components/add-message/add-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMessageComponent,
    AddMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
