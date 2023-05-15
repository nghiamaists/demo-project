import { inject, Directive } from '@angular/core';
import { Observable, map } from 'rxjs';

import { WhetherInterface } from '../../interfaces/whether-widget.interface';
import { WidgetDataProvider } from '../../services/widget-data-provider.service';
import { WidgetIconProvider } from '../../services/widget-icon-provider.service';

@Directive()
export abstract class BaseWidgetListComponent {
  public widgetData$!: Observable<WhetherInterface[]>;
  public widgetIconPath!: string;
  public tempIconPath!: string;

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
