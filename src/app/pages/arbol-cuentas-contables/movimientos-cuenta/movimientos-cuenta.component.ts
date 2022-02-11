import { MovimientosHelper } from './../../../@core/helpers/movimientos/movimientosHelper';
import { Component, Input, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-movimientos-cuenta',
  templateUrl: './movimientos-cuenta.component.html',
  styleUrls: ['./movimientos-cuenta.component.scss']
})
export class MovimientosCuentaComponent implements OnInit {

  @Input() cuenta;

  movimientos = [];

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
        }
      },
      Valor: {
        title: 'Valor',
        filter: true,
        sort: true,
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
      }
  };

  source: LocalDataSource;

  constructor( private movimientosService: MovimientosHelper ) { }

  ngOnInit() {
    this.movimientosService.getCuentasBancarias(this.cuenta.CuentaContableID).subscribe((res: any) => {
      console.log(res);
      this.movimientos = res.Data || [];
      this.source = new LocalDataSource(this.movimientos);
    });
  }

}
