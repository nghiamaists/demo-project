import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractiveWidgetRoutingModule } from './interactive-widget-routing.module';
import { WidgetComponent } from './widget/widget.component';
import { InteractiveWidgetComponent } from './interactive-widget.component';
import { OTHER_MOCK_WHETHER } from 'src/app/core/constants/mock-data';
import { HighlightModule } from 'src/app/shared/highlight-cell/shared.module';
import { MOCK_DATA, MOCK_OTHER_DATA } from 'src/app/core/di/moc-data.di';
import { AlterWidgetDataProvider } from 'src/app/core/services/alter-widget-data-provider.service';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';
import { Logger } from 'src/app/shared/logger/logger/logger.service';

@NgModule({
  declarations: [WidgetComponent, InteractiveWidgetComponent],
  providers: [
    // WidgetDataProvider,
    // {
    //   provide: AlterWidgetDataProvider,
    //   useExisting: WidgetDataProvider,
    // },
    AlterWidgetDataProvider,
    /* {
      provide: AlterWidgetDataProvider,
      useClass: WidgetDataProvider,
      deps: [MOCK_DATA, Logger]
    }, */
  ],
  imports: [CommonModule, InteractiveWidgetRoutingModule, HighlightModule],
})
export class InteractiveWidgetModule {}
