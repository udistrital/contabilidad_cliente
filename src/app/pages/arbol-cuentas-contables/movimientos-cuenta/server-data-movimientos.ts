import { MovimientosHelper } from './../../../@core/helpers/movimientos/movimientosHelper';
import { Observable } from "rxjs";
import { LocalDataSource, Ng2SmartTableComponent, ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { ServerSourceConf } from 'ng2-smart-table/lib/lib/data-source/server/server-source.conf';
import { EstructuraCuentaContable } from '../arbol-contable/cuenta-contable.model';
import { map } from 'rxjs/operators';

// define class ServerDataMovimientos iherit from class ServerDataSource overwirte method getData
export class ServerDataMovimientos extends ServerDataSource {
    movimientosService: MovimientosHelper;
    cuentaContable: String;
    constructor( movimientosService: MovimientosHelper, cuentaContable: String) {
        super(null,
        {
            endPoint:'movimiento',
            dataKey: 'Data',
            pagerPageKey: 'offset',
            pagerLimitKey: 'limit',
            totalKey: 'data.total',
            filterFieldKey: 'query#field#',
            sortFieldKey: 'sortby',
            sortDirKey: 'order',
        });
        this.cuentaContable = cuentaContable;
        this.movimientosService = movimientosService;
    };

    getElements = function () {
        console.log(this.pagingConf);
        console.log(this.sortConf);
        console.log(this.filterConf);

        const sortFields =  [];
        const sortDir = [];
        let query = { CuentaId: this.cuentaContable };

        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                sortFields.push(fieldConf.field);
                sortDir.push(fieldConf.direction);
            });
        }

        if (this.filterConf.filters) {
            this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                    query = {...query, [`${fieldConf['field']}__icontains`]: fieldConf['search']};
                }
            });
        }


        return this.movimientosService
            .getCuentasBancarias({
                query: query,
                limit: this.pagingConf.perPage,
                offset: (this.pagingConf.page - 1) * this.pagingConf.perPage,
                sortby: sortFields,
                order: sortDir,
            })
            .pipe(map((res: any)=> {
                this.data = res.Data!.map((value) => ({
                    ...value,
                    Debito: value.TipoMovimientoId === 344 ? value.Valor : 0,
                    Credito: value.TipoMovimientoId === 345 ? value.Valor : 0,
                    })) || [];
                    this.lastRequestCount = 50;
                return this.data;
            })).toPromise();
    };

}

