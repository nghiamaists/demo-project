import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractiveWidgetRoutingModule } from './interactive-widget-routing.module';
import { WidgetComponent } from './widget/widget.component';
import { InteractiveWidgetComponent } from './interactive-widget.component';
import { OTHER_MOCK_WHETHER } from 'src/app/core/constants/mock-data';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { MOCK_DATA, MOCK_OTHER_DATA } from 'src/app/core/di/moc-data.di';
import { AlterWidgetDataProvider } from 'src/app/core/services/alter-widget-data-provider.service';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';
import { Logger } from 'src/app/shared/logger/logger/logger.service';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [WidgetComponent, InteractiveWidgetComponent, TableComponent],
  providers: [
    // WidgetDataProvider,
    // {
    //   provide: AlterWidgetDataProvider,
    //   useExisting: WidgetDataProvider,
    // },
    AlterWidgetDataProvider,
  ],
  imports: [CommonModule, InteractiveWidgetRoutingModule, SharedModule],
})
export class InteractiveWidgetModule {}
