import { Injectable } from '@angular/core';
import { RequestManager } from '../../managers/requestManager';

@Injectable({
    providedIn: 'root',
})
export class TercerosHelper {
    constructor(private rqManager: RequestManager) {}

    // Tercero

    public getTerceros(parameters?: { id?: any, query?: any, fields?: string[], sortby?: string[], order?: string[], limit?: number, offset?: number }) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.getv2('tercero', parameters);
    }

    public createTercero(element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.post('tercero/', element);
    }

    public updateTercero(id: number, element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.put('tercero/', element, id);
    }

    // Tercero_tipo_tercero
    public getTerceroTipoTercero(parameters?: { id?: any, query?: any, fields?: string[], sortby?: string[], order?: string[], limit?: number, offset?: number }) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.getv2('tercero_tipo_tercero', parameters);
    }

    public createTerceroTipoTercero(element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.post('tercero_tipo_tercero/', element);
    }

    public updateTerceroTipoTercero(id: number, element: any) {
        this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
        return this.rqManager.put('tercero_tipo_tercero/', element, id);
    }

}
