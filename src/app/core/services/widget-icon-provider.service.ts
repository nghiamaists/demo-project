import { Injectable } from '@angular/core';
import { WhetherStatus } from '../enums/Whether.enum';

const SUNNY = '/assets/whether-icons/sunny.svg';
const RAINY = '/assets/whether-icons/rainny.svg';
const CLOUNDY = '/assets/whether-icons/cloudy.svg';
const TEMP = '/assets/whether-icons/temp.svg';

@Injectable()
export class WidgetIconProvider {
  public getTempIconPath(): string {
    return TEMP;
  }

  public getWidgetIconPath(status: WhetherStatus): string {
    switch (status) {
      case WhetherStatus.RAINY:
        return RAINY;
      case WhetherStatus.CLOUDY:
        return CLOUNDY;
      case WhetherStatus.SUNNY:
        return SUNNY;
      default:
        return SUNNY;
    }
  }
}
