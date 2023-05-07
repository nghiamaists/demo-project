import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { InteractableWidgetComponent } from './components/interactable-widget/interactable-widget.component';
import { DefaultWidgetComponent } from './components/default-widget/default-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractableWidgetComponent,
    DefaultWidgetComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
