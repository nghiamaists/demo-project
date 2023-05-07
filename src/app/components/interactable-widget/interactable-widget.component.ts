import { Component } from '@angular/core';
import { BaseWidgetComponent } from 'src/app/core/components/base-widget/base-widget.component';
import { DayNight } from 'src/app/core/enums/day-night.enum';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';
import { WidgetIconProvider } from 'src/app/core/services/widget-icon-provider.service';

@Component({
  selector: 'app-interactable-widget',
  templateUrl: './interactable-widget.component.html',
  styleUrls: ['./interactable-widget.component.css'],
})
export class InteractableWidgetComponent extends BaseWidgetComponent {
  public readonly dayNight = DayNight;
  public dayOrNightLabel: DayNight = DayNight.DAY;

  constructor(
    private whetherWidgetDataProvider: WidgetDataProvider,
    private whetherWidgetIconProvider: WidgetIconProvider
  ) {
    super(whetherWidgetDataProvider, whetherWidgetIconProvider);
  }

 public swapDayNight(): void {
  if(this.dayOrNightLabel === DayNight.DAY) {
    this.dayOrNightLabel = DayNight.NIGHT;
  }
  else {
    this.dayOrNightLabel = DayNight.DAY;
  }
 }
}
