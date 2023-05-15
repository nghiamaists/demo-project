import {
  AfterViewChecked,
  Component,
  ElementRef,
  Host,
  Inject,
  ViewChild,
  Optional,
} from '@angular/core';
import { HIGHLIGHT_COLOR } from 'src/app/core/di/moc-data.di';

@Component({
  selector: 'app-highlight-cell',
  templateUrl: './highlight-cell.component.html',
  styleUrls: ['./highlight-cell.component.css'],
})
export class HighlightCellComponent implements AfterViewChecked {
  @ViewChild('text') element!: ElementRef;

  constructor(
    @Inject(HIGHLIGHT_COLOR) @Host() @Optional() private highLightColor: string
  ) {}

  public ngAfterViewChecked(): void {
    console.log(this.highLightColor);
    this.element.nativeElement.style.color = this.highLightColor;
  }
}
