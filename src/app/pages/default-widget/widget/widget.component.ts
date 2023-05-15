import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { WhetherInterface } from 'src/app/core/interfaces/whether-widget.interface';

@Component({
  selector: 'default-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent implements OnInit {
  public data!: WhetherInterface;

  constructor(@Inject(MAT_DIALOG_DATA) private dialogData: WhetherInterface) {}

  ngOnInit(): void {
    this.data = this.dialogData;
  }
}
