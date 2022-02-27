import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MovimientosHelper } from './../../../@core/helpers/movimientos/movimientosHelper';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource, Ng2SmartTableComponent, ServerDataSource } from 'ng2-smart-table';
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
        filter: true,
        sort: true,
        sortDirection: 'desc',
        valuePrepareFunction: (date) => {
          return new Date(date).toLocaleDateString();
        },
      },
      Debito: {
        title: 'Debito',
        filter: true,
        sort: true,
      },
      Credito: {
        title: 'Credito',
        filter: true,
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
    private http: HttpClient,
  ) { }

  ngOnInit() {

    this.source = new ServerDataMovimientos(this.movimientosService, this.data.Id);

    // this.movimientosService
    //   .getCuentasBancarias({
    //     query: { CuentaId: this.data.Id },
    //     limit: 0,
    //     sortby: ['FechaModificacion'],
    //     order: ['desc'],
    //   })
    //   .subscribe((res: any) => {
    //     this.movimientos = res.Data!.map((value) => ({
    //       ...value,
    //       Debito: value.TipoMovimientoId === 344 ? value.Valor : 0,
    //       Credito: value.TipoMovimientoId === 345 ? value.Valor : 0,
    //     })) || [];
    //     this.source = new LocalDataSource(this.movimientos);
    //   });
  }

}
