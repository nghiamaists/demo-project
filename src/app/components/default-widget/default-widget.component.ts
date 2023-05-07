import { Component } from '@angular/core';
import { BaseWidgetComponent } from 'src/app/core/components/base-widget/base-widget.component';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';
import { WidgetIconProvider } from 'src/app/core/services/widget-icon-provider.service';

@Component({
  selector: 'app-default-widget',
  templateUrl: './default-widget.component.html',
  styleUrls: ['./default-widget.component.css']
})
export class DefaultWidgetComponent extends BaseWidgetComponent {
  constructor(
    private whetherWidgetDataProvider: WidgetDataProvider,
    private whetherWidgetIconProvider: WidgetIconProvider
  ) {
    super(whetherWidgetDataProvider, whetherWidgetIconProvider);
  }
}
