import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetDataProvider } from './core/services/widget-data-provider.service';
import { WidgetIconProvider } from './core/services/widget-icon-provider.service';
import { MatDialogModule } from '@angular/material/dialog';
import { LoggerModule } from './shared/logger/logger/logger.module';
import { MOCK_DATA } from './core/di/moc-data.di';
import { MOCK_WHETHER } from './core/constants/mock-data';
import { SharedModule } from './shared/components/shared.module';
import { TestTreeShakeService } from 'src/app/core/services/test-tree-shake-able.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    LoggerModule,
    SharedModule
  ],
  providers: [
    {
      provide: MOCK_DATA,
      useValue: MOCK_WHETHER
    },
    WidgetDataProvider,
    WidgetIconProvider,
    // TestTreeShakeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
