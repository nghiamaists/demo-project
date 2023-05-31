import { Component, Host, Input, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BaseWidgetListComponent } from 'src/app/core/components/base-widget/base-widget-list.component';
import { MOCK_DATA } from 'src/app/core/di/moc-data.di';
import { WhetherInterface } from 'src/app/core/interfaces/whether-widget.interface';
import { AlterWidgetDataProvider } from 'src/app/core/services/alter-widget-data-provider.service';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';
import { WidgetIconProvider } from 'src/app/core/services/widget-icon-provider.service';
import { WidgetComponent } from 'src/app/pages/default-widget/widget/widget.component';
import { Logger } from 'src/app/shared/logger/logger/logger.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  // providers: [
  //   {
  //     provide: WidgetDataProvider,
  //     useClass: AlterWidgetDataProvider,
  //     deps: [MOCK_DATA, Logger]
  //   }
  // ]
})
export class TableComponent extends BaseWidgetListComponent implements OnInit {
  @Input() title = '';
  constructor(
    // @Self() @Optional() private dataProvider: WidgetDataProvider,
    // @SkipSelf() @Optional() private dataProvider: WidgetDataProvider,
    // @Host() @Optional() private dataProvider: WidgetDataProvider,
    // @Host() @Optional() private dataProvider: WidgetDataProvider,
    // @Host() @SkipSelf() @Optional() private dataProvider: WidgetDataProvider,
    private dataProvider: WidgetDataProvider,
    private iconProvider: WidgetIconProvider,
    // private newData: AlterWidgetDataProvider,
    private dialog: MatDialog,
  ) {
    super(dataProvider, iconProvider);
  }

  ngOnInit() {
    // console.log(this.dataProvider);
    this.getAllWidget();
    // this.widgetData$ = this.newData.getAllData();
  }

  public override viewWidget(data: WhetherInterface): void {
    this.dialog.open(WidgetComponent, {
      data,
    });
  }
}
