import { InjectionToken } from '@angular/core';
import { WhetherInterface } from '../interfaces/whether-widget.interface';

export const MOCK_DATA = new InjectionToken<WhetherInterface[]>('WhetherData');
export const MOCK_OTHER_DATA = new InjectionToken<WhetherInterface[]>(
  'OtherWhetherData'
);
export const HIGHLIGHT_COLOR = new InjectionToken<string>('Color');
