import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetDataProvider } from './core/services/widget-data-provider.service';
import { WidgetIconProvider } from './core/services/widget-icon-provider.service';
import { MOCK_DATA } from './core/di/moc-data.di';
import { MOCK_WHETHER } from './core/constants/mock-data';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: WidgetDataProvider,
      useClass: WidgetDataProvider,
    },
    WidgetIconProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
