import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultWidgetRoutingModule } from './default-widget-routing.module';
import { DefaultWidgetComponent } from './default-widget.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';
import { WidgetIconProvider } from 'src/app/core/services/widget-icon-provider.service';
import { MOCK_DATA } from 'src/app/core/di/moc-data.di';
import { OTHER_MOCK_WHETHER } from 'src/app/core/constants/mock-data';
import { HighlightModule } from 'src/app/shared/highlight-cell/shared.module';
import { WhetherInterface } from 'src/app/core/interfaces/whether-widget.interface';
import { WidgetDataLimitedProvider } from 'src/app/core/services/widget-data-limied-provider.service';
import { LoggerModule } from 'src/app/shared/logger/logger/logger.module';

@NgModule({
  declarations: [DefaultWidgetComponent, WidgetComponent],
  providers: [
    // Factory function
    /*     {
      provide: WidgetDataProvider,
      useFactory: (data: WhetherInterface[]) => {
        return new WidgetDataLimitedProvider(data, 2, 4)
      },
      deps: [MOCK_DATA]
    }, */
    // Factory with inject
    /* {
      provide: WidgetDataProvider,
      useFactory: () => {
        const data = inject(MOCK_DATA);
        return new WidgetDataLimitedProvider(data, 2, 4)
      },
    }, */
   /*  {
      provide: MOCK_DATA,
      useValue: OTHER_MOCK_WHETHER,
    }, */
  ],
  imports: [
    CommonModule,
    DefaultWidgetRoutingModule,
    HighlightModule,
    // LoggerModule,
  ],
})
export class DefaultWidgetModule {}
