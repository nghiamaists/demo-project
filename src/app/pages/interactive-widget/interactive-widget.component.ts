import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/core/services/history.service';
import { WidgetDataProvider } from 'src/app/core/services/widget-data-provider.service';

@Component({
  selector: 'app-interactive-widget',
  templateUrl: './interactive-widget.component.html',
  styleUrls: ['./interactive-widget.component.css'],
  // viewProviders: [
  //   WidgetDataProvider
  // ]
})
export class InteractiveWidgetComponent implements OnInit {
  constructor(private appHistory: HistoryService) {}

  ngOnInit(): void {
    this.appHistory.appendNewToHistory('InteractiveWidgetComponent');
  }
}
