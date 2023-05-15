import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCellComponent } from './highlight-cell/highlight-cell.component';

@NgModule({
  declarations: [HighlightCellComponent],
  imports: [CommonModule],
  exports: [HighlightCellComponent],
})
export class SharedModule {}
