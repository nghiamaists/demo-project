import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DayNight } from 'src/app/core/enums/day-night.enum';
import { WhetherInterface } from 'src/app/core/interfaces/whether-widget.interface';

@Component({
  selector: 'interactive-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent implements OnInit {
  public data!: WhetherInterface;
  public readonly dayNight = DayNight;
  public dayOrNightLabel: DayNight = DayNight.DAY;

  constructor(@Inject(MAT_DIALOG_DATA) private dialogData: WhetherInterface) {}

  ngOnInit(): void {
    this.data = this.dialogData;
  }

  public swapDayNight(): void {
    if (this.dayOrNightLabel === DayNight.DAY) {
      this.dayOrNightLabel = DayNight.NIGHT;
    } else {
      this.dayOrNightLabel = DayNight.DAY;
    }
  }
}
