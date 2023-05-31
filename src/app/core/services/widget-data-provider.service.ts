import { Injectable, Inject, Self, SkipSelf } from '@angular/core';
import { WhetherInterface } from '../interfaces/whether-widget.interface';
import { Observable, of } from 'rxjs';
import { MOCK_DATA } from '../di/moc-data.di';
import { Logger } from 'src/app/shared/logger/logger/logger.service';

@Injectable()
export class WidgetDataProvider {
  constructor(@Inject(MOCK_DATA) private data: WhetherInterface[], private logger: Logger) {
    logger.log('WidgetDataProvider init');
  }

  /* constructor(@Inject(MOCK_DATA) @Self() private data: WhetherInterface[], private logger: Logger) {
    logger.log('WidgetDataProvider init');
  } */

  // constructor(@Inject(MOCK_DATA) @SkipSelf() private data: WhetherInterface[]) {}

  public getAllData(): Observable<WhetherInterface[]> {
    return of(this.data);
  }

  public dataCount(): Observable<number> {
    return of(this.data.length);
  }

  public getDataById(id: string): Observable<WhetherInterface> {
    return of(this.data.find((item) => item.id === id)!);
  }
}
