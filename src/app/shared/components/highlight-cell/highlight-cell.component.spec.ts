import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightCellComponent } from './highlight-cell.component';

describe('HighlightCellComponent', () => {
  let component: HighlightCellComponent;
  let fixture: ComponentFixture<HighlightCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightCellComponent],
    });
    fixture = TestBed.createComponent(HighlightCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
