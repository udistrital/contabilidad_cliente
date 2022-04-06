import { MovimientosHelper } from '../../@core/helpers/movimientos/movimientosHelper';
import { ServerDataSource } from 'ng2-smart-table';
import { map } from 'rxjs/operators';

export class ServerDataMovimientos extends ServerDataSource {
    movimientosService: MovimientosHelper;
    lastPage: number = 0;
    query = {};
    constructor(movimientosService: MovimientosHelper, query: any) {
        super(null, {
            endPoint: '_'
        });
        this.movimientosService = movimientosService;
        this.lastRequestCount = 1;
        this.query = query;
    }

    getElements = function () {
        const sortFields = [];
        const sortDir = [];

        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                sortFields.push(fieldConf.field);
                sortDir.push(fieldConf.direction);
            });
        }

        if (this.filterConf.filters) {
            this.filterConf.filters.forEach( (fieldConf) => {
                const field = `${fieldConf['field']}__icontains`;
                const value = fieldConf['search'];
                if (value && this.query[field] !== value) {
                    this.pagingConf.page = 1;
                    this.lastRequestCount = 1;
                    this.lastPage = 0;
                    this.query = {
                        ...this.query,
                        [field]: value,
                    };
                }
            });
        }

        return this.movimientosService
            .getMovimientosContables({
                query: this.query,
                limit: this.pagingConf.perPage,
                offset: (this.pagingConf.page - 1) * this.pagingConf.perPage,
                sortby: sortFields,
                order: sortDir,
            })
            .pipe(
                map((res: any) => {
                    this.data = res.Data ?
                        res.Data.map((value) => ({
                            ...value,
                            Debito: value.TipoMovimientoId === this.movimientosService.DEBITO_COD ? value.Valor : 0,
                            Credito: value.TipoMovimientoId === this.movimientosService.CREDITO_COD ? value.Valor : 0,
                        })) : [];
                    this.lastRequestCount =
                        this.data.length === this.pagingConf.perPage && this.pagingConf.page > this.lastPage
                            ? this.lastRequestCount + this.pagingConf.perPage
                            : this.lastRequestCount;
                    this.lastPage = this.pagingConf.page > this.lastPage ? this.pagingConf.page : this.lastPage;
                    return this.data;
                })
            )
            .toPromise();
    };
}
