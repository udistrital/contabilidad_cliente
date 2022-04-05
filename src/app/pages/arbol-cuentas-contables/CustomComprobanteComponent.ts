import { map } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { ComprobanteHelper } from '../../@core/helpers/comprobantes/comprobanteHelper';


@Component({
  template: `
    <span>{{ comprovanteObs | async}}</span>
  `,
})
export class CustomComprobanteComponent implements OnInit, ViewCell {
  constructor(private comprobantesService: ComprobanteHelper) { }

  renderValue: number;
  isRed: boolean;

  @Input() value: string;
  @Input() rowData: any;

  comprovanteObs: Observable < String > ;

  ngOnInit() {
    const comprobante = JSON.parse(this.value);
    if (comprobante.ComprobanteId) {
        this.comprovanteObs = this.comprobantesService.getComprobantes(comprobante.ComprobanteId).pipe(
            map(value => {
                return `${value.TipoComprobante.TipoDocumento}${value.Numero} ${value.Comprobante}`;
            })
        );
    }
  }

}
