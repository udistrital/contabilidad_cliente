import { MovimientosHelper } from './../../../@core/helpers/movimientos/movimientosHelper';
import { Component, Inject, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EstructuraCuentaContable } from '../arbol-contable/cuenta-contable.model';
import { ServerDataMovimientos } from './server-data-movimientos';
import { CustomRendererComponent } from './CustomRendererComponent';

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

  sadoNaturaleza = (cell) => {
    if ( this.data.NaturalezaCuentaID === this.movimientosService.CREDITO ) {
      return -cell;
    }
    return cell;
  }

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
        sortDirection: 'asc',
        valuePrepareFunction: (date) => {
          return new Date(date).toLocaleDateString();
        },
      },
      SaldoAnterior: {
        title: 'Saldo Anterior',
        filter: false,
        sort: false,
        valuePrepareFunction: this.sadoNaturaleza,
        type: 'custom',
        renderComponent: CustomRendererComponent,
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
      NuevoSaldo: {
        title: 'Nuevo Saldo',
        filter: false,
        sort: false,
        valuePrepareFunction: this.sadoNaturaleza,
        type: 'custom',
        renderComponent: CustomRendererComponent,
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
