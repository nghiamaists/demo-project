import { Injectable, Inject, Self, SkipSelf } from '@angular/core';
import { WhetherInterface } from '../interfaces/whether-widget.interface';
import { Observable, of } from 'rxjs';
import { MOCK_DATA } from '../di/moc-data.di';
import { Logger } from 'src/app/shared/logger/logger/logger.service';

@Injectable()
export class AlterWidgetDataProvider {
  constructor(@Inject(MOCK_DATA) private data: WhetherInterface[], private logger: Logger) {
    logger.log('AlterWidgetDataProvider init');
  }

  public getAllData(): Observable<WhetherInterface[]> {
    return of(this.data.reverse());
  }
}
