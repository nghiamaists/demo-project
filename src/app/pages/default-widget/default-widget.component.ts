import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { BaseWidgetListComponent } from 'src/app/core/components/base-widget/base-widget-list.component';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';
import { WidgetIconProvider } from 'src/app/core/services/widget-icon-provider.service';
import { WhetherInterface } from 'src/app/core/interfaces/whether-widget.interface';
import { WidgetComponent } from './widget/widget.component';

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
    private dialog: MatDialog
  ) {
    super(dataProvider, iconProvider);
  }

  ngOnInit(): void {
    this.getAllWidget();
  }

  public override viewWidget(data: WhetherInterface): void {
    this.dialog.open(WidgetComponent, {
      data,
    });
  }
}