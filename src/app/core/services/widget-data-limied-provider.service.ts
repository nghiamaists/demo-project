import { Inject } from '@angular/core';
import { WhetherInterface } from '../interfaces/whether-widget.interface';
import { Observable, of } from 'rxjs';

export class WidgetDataLimitedProvider {
  dataLimited: WhetherInterface[];
  constructor(
    data: WhetherInterface[],
    private start: number,
    private end: number
  ) {
    this.dataLimited = data.slice(start, end);
  }

  public getAllData(): Observable<WhetherInterface[]> {
    return of(this.dataLimited);
  }

  public dataCount(): Observable<number> {
    return of(this.dataLimited.length);
  }

  public getDataById(id: string): Observable<WhetherInterface> {
    return of(this.dataLimited.find((item) => item.id === id)!);
  }
}
