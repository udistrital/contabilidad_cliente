import { Injectable } from '@angular/core';
import { RequestManager } from '../../managers/requestManager';
import { QueryParams } from '../model/query-params';

@Injectable({
    providedIn: 'root',
})
export class MovimientosHelper {
    constructor(private rqManager: RequestManager) {}

    // movimientos_crud

    public getCuentasBancarias(parameters?: QueryParams) {
        this.rqManager.setPath('MOVIMIENTOS_SERVICE');
        return this.rqManager.getv2('movimiento', parameters);
    }

}
