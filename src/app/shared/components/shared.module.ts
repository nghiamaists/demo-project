import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCellComponent } from './highlight-cell/highlight-cell.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [HighlightCellComponent, HistoryComponent],
  imports: [CommonModule],
  exports: [HighlightCellComponent, HistoryComponent],
})
export class SharedModule {}
