import { map } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';


@Component({
  template: `
    <span>{{ comprovanteObs }}</span>
  `,
})
export class CustomComprobanteComponent implements OnInit, ViewCell {
  constructor() { }

  renderValue: number;
  isRed: boolean;

  @Input() value: string;
  @Input() rowData: any;

  comprovanteObs: String;

  ngOnInit() {
    if (this.rowData) {
          this.comprovanteObs = `${((this.rowData.Comprobante || {}).TipoComprobante || {}).TipoDocumento || ''}` +
          `${(this.rowData.Comprobante || {}).Numero || ''}-${(this.rowData.Consecutivo || {}).Consecutivo || ''}-${(this.rowData.Consecutivo || {}).Year || ''}`;
    }
  }

}
