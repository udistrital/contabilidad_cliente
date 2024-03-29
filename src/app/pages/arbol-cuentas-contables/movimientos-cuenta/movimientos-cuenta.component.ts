import { DetalleTransaccionComponent } from './../detalle-transaccion/detalle-transaccion.component';
import { MovimientosHelper } from './../../../@core/helpers/movimientos/movimientosHelper';
import { Component, Inject, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EstructuraCuentaContable } from '../arbol-contable/cuenta-contable.model';
import { ServerDataMovimientos } from '../server-data-movimientos';
import { CustomRendererComponent } from '../CustomRendererComponent';
import { CustomComprobanteComponent } from '../CustomComprobanteComponent';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-movimientos-cuenta',
  templateUrl: './movimientos-cuenta.component.html',
  styleUrls: ['./movimientos-cuenta.component.scss'],
})
export class MovimientosCuentaComponent implements OnInit {

  movimientos = [];

  tercerohidden = true;

  paginationSettigs = {
    rows: 50,
    offset: 0
  };

  saldoNaturaleza = (cell) => {
    if ( this.data.NaturalezaCuentaID === this.movimientosService.CREDITO ) {
      return -cell;
    }
    return cell;
  }

  listSettings = {
    columns: {
      Consecutivo: {
        title:  this.translate.instant('GLOBAL.consecutivo'),
        filter: false,
        sort: false,
        type: 'custom',
        valuePrepareFunction: (cell, row) =>  row.TransaccionId.Etiquetas,
        renderComponent: CustomComprobanteComponent,
      },
      TransaccionId__Descripcion: {
        title: this.translate.instant('GLOBAL.descripcion'),
        filter: true,
        sort: true,
        valuePrepareFunction: (cell, row) =>  row.TransaccionId.Descripcion,
      },
      FechaModificacion: {
        title: this.translate.instant('GLOBAL.fecha'),
        filter: false,
        sort: true,
        sortDirection: 'desc',
        valuePrepareFunction: (date) => {
          return new Date(date).toLocaleDateString();
        },
      },
      Tercero: {
        title: this.translate.instant('GLOBAL.tercero'),
        filter: false,
        sort: false,
        valuePrepareFunction: (value) => {
          return (value || {}).NombreCompleto || '';
        },
      },
      SaldoAnterior: {
        title: this.translate.instant('GLOBAL.saldo_anterior'),
        filter: false,
        sort: false,
        valuePrepareFunction: this.saldoNaturaleza,
        type: 'custom',
        renderComponent: CustomRendererComponent,
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
      NuevoSaldo: {
        title: this.translate.instant('GLOBAL.nuevo_saldo'),
        filter: false,
        sort: false,
        valuePrepareFunction: this.saldoNaturaleza,
        type: 'custom',
        renderComponent: CustomRendererComponent,
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'left',
      columnTitle: 'Abrir',
      custom: [
        {
          name: 'detalleTx',
          title: '<i class="fa fa-solid fa-receipt"></i>',
          position: 'start',
          filter: false,
        }
      ],
    },
    pager: {
      display: true,
      perPage: 10,
    },
  };

  source: LocalDataSource;
  serverSource: ServerDataMovimientos;
  constructor(
    private movimientosService: MovimientosHelper,
    public dialogRef: MatDialogRef<MovimientosCuentaComponent>,
    public dialog: MatDialog,
    private translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data: EstructuraCuentaContable,
  ) { }

  ngOnInit() {
    if (this.data.RequiereTercero) {
      this.tercerohidden = false;
    }
    this.source = new ServerDataMovimientos(this.movimientosService, { CuentaId: this.data.Id });
  }

  openDialog(raw): void {
    const dialogRef = this.dialog.open(DetalleTransaccionComponent, {
      data: raw,
      width: '85%',
      maxWidth: '85%',
      minWidth: '85%',
    });
  }

}
