import { WhetherStatus } from '../enums/Whether.enum';

export interface WhetherInterface {
  id: string;
  dayTemp: number;
  nightTemp: number;
  dayWind: number;
  dayHumidity: number;
  nightHumidity: number;
  nightWind: number;
  status: WhetherStatus;
  date: Date;
  iconPath?: string;
}
