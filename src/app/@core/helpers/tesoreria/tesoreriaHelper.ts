import { Injectable } from '@angular/core';
import { RequestManager } from '../../managers/requestManager';
import { QueryParams } from '../model/query-params';

@Injectable({
    providedIn: 'root',
})
export class TesoreriaHelper {
    constructor(private rqManager: RequestManager) {}

    // tesoreria_mid

    public getCuentasBancarias(parameters?: QueryParams) {
        this.rqManager.setPath('TESORERIA_MID_SERVICE');
        return this.rqManager.getv2('cuenta_bancaria_banco', parameters);
    }

}
