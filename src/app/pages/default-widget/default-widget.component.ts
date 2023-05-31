import { MatDialog } from '@angular/material/dialog';
import { Component, Host, OnInit, Optional } from '@angular/core';
import { BaseWidgetListComponent } from 'src/app/core/components/base-widget/base-widget-list.component';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';
import { WidgetIconProvider } from 'src/app/core/services/widget-icon-provider.service';
import { WhetherInterface } from 'src/app/core/interfaces/whether-widget.interface';
import { WidgetComponent } from './widget/widget.component';
import { Logger } from 'src/app/shared/logger/logger/logger.service';
import { HistoryService } from 'src/app/core/services/history.service';

@Component({
  templateUrl: './default-widget.component.html',
  styleUrls: ['./default-widget.component.css'],
  viewProviders: [],
})
export class DefaultWidgetComponent
  extends BaseWidgetListComponent
  implements OnInit
{
  constructor(
    private dataProvider: WidgetDataProvider,
    private iconProvider: WidgetIconProvider,
    private dialog: MatDialog,
    private logger: Logger,
    private appHistory: HistoryService,
  ) {
    super(dataProvider, iconProvider);
  }

  ngOnInit(): void {
    this.appHistory.appendNewToHistory('DefaultWidgetComponent');
    this.getAllWidget();
    this.logger.log('Default Widget Component Init');
  }

  public override viewWidget(data: WhetherInterface): void {
    this.dialog.open(WidgetComponent, {
      data,
    });
  }
}
