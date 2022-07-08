import { Injectable } from '@angular/core';
import { RequestManager } from '../../managers/requestManager';
import { QueryParams } from '../model/query-params';

@Injectable({
    providedIn: 'root',
})
export class MovimientosHelper {
    constructor(private rqManager: RequestManager) {}

    public DEBITO = 'debito';
    public CREDITO = 'credito';
    public DEBITO_COD = 344;
    public CREDITO_COD = 345;

    // movimientos_crud

    public getMovimientosContables(parameters?: QueryParams) {
        this.rqManager.setPath('MOVIMIENTOS_MID');
        return this.rqManager.getv2('movimientos', parameters);
    }

    public getSaldosContables(parameters?: QueryParams) {
        this.rqManager.setPath('MOVIMIENTOS_SERVICE');
        return this.rqManager.getv2('saldo', parameters);
    }

    public getTransaccionMovimientosContables(id?: string) {
        this.rqManager.setPath('MOVIMIENTOS_MID');
        return this.rqManager.getv2('transaccion_movimientos/transaccion', {id, detailed: true});
    }
}
