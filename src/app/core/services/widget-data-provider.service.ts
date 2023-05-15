import { Injectable, Inject, Self, SkipSelf } from '@angular/core';
import { WhetherInterface } from '../interfaces/whether-widget.interface';
import { Observable, of } from 'rxjs';
import { MOCK_DATA } from '../di/moc-data.di';

@Injectable()
export class WidgetDataProvider {
  constructor(@Inject(MOCK_DATA) @Self() private data: WhetherInterface[]) {}

  // constructor(@Inject(MOCK_DATA) @SkipSelf() private data: WhetherInterface[]) {}

  public getAllData(): Observable<WhetherInterface[]> {
    return of(this.data);
  }

  public dataCount(): Observable<number> {
    return of(this.data.length);
  }

  public getDataById(id: number): Observable<WhetherInterface> {
    return of(this.data.find((item) => item.id === id)!);
  }
}
