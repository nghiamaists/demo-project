import { WhetherStatus } from '../enums/Whether.enum';
import { WhetherInterface } from '../interfaces/whether-widget.interface';


export const MOCK_WHETHER: WhetherInterface[] = [
  {
    id: 1,
    date: new Date(2023, 4, 10),
    dayTemp: 35,
    nightTemp: 28,
    dayWind: 15,
    dayHumidity: 30,
    nightWind: 17,
    nightHumidity: 29,
    status: WhetherStatus.SUNNY,
  },
  {
    id: 2,
    date: new Date(2023, 4, 11),
    dayTemp: 31,
    nightTemp: 25,
    dayWind: 15,
    dayHumidity: 30,
    nightWind: 17,
    nightHumidity: 29,
    status: WhetherStatus.CLOUDY,
  },
  {
    id: 3,
    date: new Date(2023, 4, 12),
    dayTemp: 29,
    nightTemp: 21,
    dayWind: 15,
    dayHumidity: 30,
    nightWind: 17,
    nightHumidity: 29,
    status: WhetherStatus.RAINNY,
  },
  {
    id: 4,
    date: new Date(2023, 4, 13),
    dayTemp: 30,
    nightTemp: 22,
    dayWind: 15,
    dayHumidity: 30,
    nightWind: 17,
    nightHumidity: 29,
    status: WhetherStatus.RAINNY,
  },
];
