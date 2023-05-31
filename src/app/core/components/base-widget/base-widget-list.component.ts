import { inject, Directive } from '@angular/core';
import { Observable, map } from 'rxjs';

import { WhetherInterface } from '../../interfaces/whether-widget.interface';
import { WidgetDataProvider } from '../../services/widget-data-provider.service';
import { WidgetIconProvider } from '../../services/widget-icon-provider.service';
import { Logger } from 'src/app/shared/logger/logger/logger.service';
import { MOCK_DATA } from 'src/app/core/di/moc-data.di';

function getDataFromInjectWithClosure(): () => Observable<WhetherInterface[]> {
  const logger = inject(Logger);
  const mockData = inject(MOCK_DATA);
  return () => new WidgetDataProvider(mockData, logger).getAllData();
}

function getDataFromInject(): Observable<WhetherInterface[]> {
  const logger = inject(Logger);
  const mockData = inject(MOCK_DATA);
  return new WidgetDataProvider(mockData, logger).getAllData();
}


@Directive()
export abstract class BaseWidgetListComponent {
  public widgetData$!: Observable<WhetherInterface[]>;
  public widgetIconPath!: string;
  public tempIconPath!: string;
  // private getData = getDataFromInjectWithClosure();

  // private widgetDataProvider = inject(WidgetDataProvider);
  // private widgetIconProvider = inject(WidgetIconProvider);

  constructor(
    private widgetDataProvider: WidgetDataProvider,
    private widgetIconProvider: WidgetIconProvider
  ) {}

  protected getAllWidget(): void {
    this.widgetData$ = this.widgetDataProvider.getAllData().pipe(
      map((data) =>
        data.map((item) => ({
          ...item,
          iconPath: this.widgetIconProvider.getWidgetIconPath(item.status),
        }))
      )
    );
  }

  public abstract viewWidget(data: WhetherInterface): void;
}
