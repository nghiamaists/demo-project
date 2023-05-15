import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractiveWidgetRoutingModule } from './interactive-widget-routing.module';
import { WidgetComponent } from './widget/widget.component';
import { InteractiveWidgetComponent } from './interactive-widget.component';
import { MOCK_DATA, MOCK_OTHER_DATA } from 'src/app/core/di/moc-data.di';
import { OTHER_MOCK_WHETHER } from 'src/app/core/constants/mock-data';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';
import { WidgetIconProvider } from 'src/app/core/services/widget-icon-provider.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WidgetComponent, InteractiveWidgetComponent],
  providers: [
    {
      provide: WidgetDataProvider,
      useClass: WidgetDataProvider,
    },
    {
      provide: MOCK_OTHER_DATA,
      useValue: OTHER_MOCK_WHETHER,
    },
    {
      provide: MOCK_DATA,
      useExisting: MOCK_OTHER_DATA,
    },
    WidgetIconProvider,
  ],
  imports: [CommonModule, InteractiveWidgetRoutingModule, SharedModule],
})
export class InteractiveWidgetModule {}
