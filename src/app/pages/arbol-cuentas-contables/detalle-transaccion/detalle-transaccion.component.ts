import { MovimientosCuentaComponent } from './../movimientos-cuenta/movimientos-cuenta.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { CustomRendererComponent } from '../CustomRendererComponent';
import { MovimientosHelper } from '../../../@core/helpers/movimientos/movimientosHelper';
import { LocalDataSource } from 'ng2-smart-table';
import { ServerDataMovimientos } from '../server-data-movimientos';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './detalle-transaccion.component.html',
  styleUrls: ['./detalle-transaccion.component.scss']
})
export class DetalleTransaccionComponent implements OnInit {

  transaction: any = {};

  movimientos = [];

  consecutivo = '';

  paginationSettigs = {
    rows: 50,
    offset: 0
  };

  listSettings = {
    columns: {
      idx: {
        title:  this.translate.instant('GLOBAL.secuencia'),
        filter: false,
        sort: true,
        width: '100px',
        valuePrepareFunction: (val, row, cell) => {
          return cell.row.index + 1;
        },
      },
      Cuenta: {
        title: this.translate.instant('GLOBAL.cuenta_contable'),
        filter: false,
        sort: true,
        valuePrepareFunction: (cuenta) => {
          return `[${cuenta.Codigo}] ${cuenta.Nombre}`;
        },
      },
      Tercero: {
        title: this.translate.instant('GLOBAL.tercero'),
        filter: false,
        sort: true,
        valuePrepareFunction: (tercero) => {
          return tercero ? tercero.NombreCompleto : '';
        },
      },
      Descripcion: {
        title: this.translate.instant('GLOBAL.descripcion'),
        filter: false,
        sort: false,
      },
      Debito: {
        title: this.translate.instant('GLOBAL.debito'),
        filter: false,
        sort: false,
        type: 'custom',
        renderComponent: CustomRendererComponent,
        valuePrepareFunction: (val, row) => {
          return row.TipoMovimientoId === this.movimientosService.DEBITO_COD ? row.Valor : 0;
        },
      },
      Credito: {
        title: this.translate.instant('GLOBAL.credito'),
        filter: false,
        sort: false,
        type: 'custom',
        renderComponent: CustomRendererComponent,
        valuePrepareFunction: (val, row, ) => {
          return row.TipoMovimientoId === this.movimientosService.CREDITO_COD ? row.Valor : 0;
        },
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'left',
    },
    pager: {
      display: true,
      perPage: 20,
    },
  };

  source: LocalDataSource;
  serverSource: ServerDataMovimientos;

  constructor(
    public dialogRef: MatDialogRef<MovimientosCuentaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translate: TranslateService,
    private movimientosService: MovimientosHelper, ) { }

  ngOnInit() {
    if (this.data && this.data.data && this.data.data.TransaccionId) {
      this.transaction = this.data.data.TransaccionId;
    }

    this.movimientosService.getTransaccionMovimientosContables(this.transaction.Id).subscribe((res) => {
      this.transaction = res;
      this.transaction.FechaTransaccion = new Date(this.transaction.FechaTransaccion).toLocaleDateString();
      this.movimientos = res.Movimientos || [];
      this.source = new LocalDataSource(this.movimientos);
      this.consecutivo = `${((this.transaction.Comprobante || {}).TipoComprobante || {}).TipoDocumento || ''}` +
      `${(this.transaction.Comprobante || {}).Numero || ''}-${(this.transaction.Consecutivo || {}).Consecutivo || ''}-${(this.transaction.Consecutivo || {}).Year || ''}`;
    });
  }
}
