import { ChangeDetectorRef, Component, OnInit, ApplicationRef  } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryService } from 'src/app/core/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './app-history.component.html',
  styleUrls: ['./app-history.component.css'],
})
export class AppHistoryComponent implements OnInit {
  history: string[] = [];

  constructor(
    private appHistory: HistoryService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.appHistory.navigatedHistory$.subscribe((result) => {
      this.history = result;
      this.changeDetection.detectChanges();
    });
  }
}
