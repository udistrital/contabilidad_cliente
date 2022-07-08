import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';


@Component({
  template: `
    <span [ngStyle]="isRed && {'color': 'red'}" style="float: right">{{ renderValue | currency }}</span>
  `,
})
export class CustomRendererComponent implements OnInit, ViewCell {
  constructor() { }

  renderValue: number;
  isRed: boolean;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.isRed = this.value < 0;
    this.renderValue = Math.abs(+this.value);
  }

}
