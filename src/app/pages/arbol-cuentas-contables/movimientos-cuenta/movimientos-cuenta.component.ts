import { MovimientosHelper } from './../../../@core/helpers/movimientos/movimientosHelper';
import { Component, Inject, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EstructuraCuentaContable } from '../arbol-contable/cuenta-contable.model';
import { ServerDataMovimientos } from './server-data-movimientos';

@Component({
  selector: 'ngx-movimientos-cuenta',
  templateUrl: './movimientos-cuenta.component.html',
  styleUrls: ['./movimientos-cuenta.component.scss'],
})
export class MovimientosCuentaComponent implements OnInit {

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
      Descripcion: {
        title: 'Descripcion',
        filter: true,
        sort: true,
      },
      FechaModificacion: {
        title: 'Fecha',
        filter: false,
        sort: true,
        sortDirection: 'desc',
        valuePrepareFunction: (date) => {
          return new Date(date).toLocaleDateString();
        },
      },
      Debito: {
        title: 'Debito',
        filter: false,
        sort: true,
      },
      Credito: {
        title: 'Credito',
        filter: false,
        sort: true,
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
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
    @Inject(MAT_DIALOG_DATA) public data: EstructuraCuentaContable,
  ) { }

  ngOnInit() {
    this.source = new ServerDataMovimientos(this.movimientosService, this.data.Id);
  }

}
