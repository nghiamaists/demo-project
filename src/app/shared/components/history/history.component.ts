import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryService } from 'src/app/core/services/history.service';

@Component({
  selector: 'app-local-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  get history$(): Observable<string[]> {
    return this.appHistory.navigatedHistory$;
  }

  constructor(private appHistory: HistoryService) {}

  ngOnInit(): void {
    this.appHistory.appendNewToHistory('HistoryComponent');
  }

}
