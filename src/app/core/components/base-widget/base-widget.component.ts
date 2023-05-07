import { Input, Directive } from '@angular/core';
import { Observable } from 'rxjs';

import { WhetherInterface } from './../../interfaces/whether-widget.interface';
import { WidgetDataProvider } from '../../services/widget-data-provider.service';
import { WidgetIconProvider } from '../../services/widget-icon-provider.service';

@Directive()
export abstract class BaseWidgetComponent {
  @Input() set id(id: number) {
    this.getWidgetById(id);
  }

  public widgetData$!: Observable<WhetherInterface>;
  public widgetIconPath!: string;
  public tempIconPath!: string;

  constructor(
    private widgetDataProvider: WidgetDataProvider,
    private widgetIconProvider: WidgetIconProvider
  ) {}

  protected getWidgetById(id: number): void {
    this.widgetData$ = this.widgetDataProvider.getDataById(id);
    this.getWidgetIconPath();
  }

  protected getWidgetIconPath(): void {
    this.widgetData$.subscribe((data) => {
      this.tempIconPath = this.widgetIconProvider.getTempIconPath();
      this.widgetIconPath = this.widgetIconProvider.getWidgetIconPath(
        data.status
      );
    });
  }
}
