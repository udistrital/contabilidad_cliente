import { Injectable } from '@angular/core';
import { RequestManager } from '../../managers/requestManager';
import { QueryParams } from '../model/query-params';

@Injectable({
    providedIn: 'root',
})
export class GirosHelper {
    constructor(private rqManager: RequestManager) {}

    // Terceros

    public getCuentasBancarias(parameters?: QueryParams) {
        this.rqManager.setPath('GIROS_CRUD_SERVICE');
        return this.rqManager.getv2('cuenta_bancaria', parameters);
    }

    public createCuentaBancaria(element: any) {
        this.rqManager.setPath('GIROS_CRUD_SERVICE');
        return this.rqManager.post('cuenta_bancaria/', element);
    }

    public updateCuentaBancaria(id: number, element: any) {
        this.rqManager.setPath('GIROS_CRUD_SERVICE');
        return this.rqManager.put('cuenta_bancaria/', element, id);
    }

}
