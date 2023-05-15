import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseWidgetListComponent } from 'src/app/core/components/base-widget/base-widget-list.component';
import { WhetherInterface } from 'src/app/core/interfaces/whether-widget.interface';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';
import { WidgetIconProvider } from 'src/app/core/services/widget-icon-provider.service';
import { WidgetComponent } from './widget/widget.component';
import { HIGHLIGHT_COLOR } from 'src/app/core/di/moc-data.di';

@Component({
  selector: 'app-interactive-widget',
  templateUrl: './interactive-widget.component.html',
  styleUrls: ['./interactive-widget.component.css'],
  viewProviders: [
    {
      provide: HIGHLIGHT_COLOR,
      useValue: 'red',
    },
  ],
})
export class InteractiveWidgetComponent
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

  ngOnInit() {
    this.getAllWidget();
  }

  public override viewWidget(data: WhetherInterface): void {
    this.dialog.open(WidgetComponent, {
      data,
    });
  }
}
