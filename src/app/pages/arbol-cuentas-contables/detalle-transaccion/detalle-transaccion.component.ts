import { MovimientosCuentaComponent } from './../movimientos-cuenta/movimientos-cuenta.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { CustomRendererComponent } from '../CustomRendererComponent';
import { MovimientosHelper } from '../../../@core/helpers/movimientos/movimientosHelper';
import { LocalDataSource } from 'ng2-smart-table';
import { ServerDataMovimientos } from '../server-data-movimientos';

@Component({
  templateUrl: './detalle-transaccion.component.html',
  styleUrls: ['./detalle-transaccion.component.scss']
})
export class DetalleTransaccionComponent implements OnInit {

  transaction: any = {};

  movimientos = [];

  paginationSettigs = {
    rows: 50,
    offset: 0
  };

  listSettings = {
    columns: {
      Id: {
        title: 'Consecutivo',
        filter: true,
        sort: true,
      },
      NombreCuenta: {
        title: 'Cuenta',
        filter: true,
        sort: true,
      },
      FechaModificacion: {
        title: 'Fecha',
        filter: false,
        sort: true,
        sortDirection: 'asc',
        valuePrepareFunction: (date) => {
          return new Date(date).toLocaleDateString();
        },
      },
      Debito: {
        title: 'Debito',
        filter: false,
        sort: false,
        type: 'custom',
        renderComponent: CustomRendererComponent,
      },
      Credito: {
        title: 'Credito',
        filter: false,
        sort: false,
        type: 'custom',
        renderComponent: CustomRendererComponent,
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
    private movimientosService: MovimientosHelper, ) { }

  ngOnInit() {
    if (this.data && this.data.data && this.data.data.TransaccionId) {
      this.transaction = this.data.data.TransaccionId;
    }
    this.source = new ServerDataMovimientos(this.movimientosService, { TransaccionId__Id: this.transaction.Id });
  }

}
