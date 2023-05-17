import { Component, OnInit, Optional } from '@angular/core';
import { Logger } from './shared/logger/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'demo-di-signal';
  constructor(@Optional() private logger: Logger) {}

  public ngOnInit(): void {
    this.logger.log('App Component Init');
  }
}
