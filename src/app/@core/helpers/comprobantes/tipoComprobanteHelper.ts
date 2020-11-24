import { RequestManager } from '../../managers/requestManager';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PopUpManager } from '../../managers/popUpManager';

@Injectable({
    providedIn: 'root',
})
export class TipoComprobanteHelper {

    query_params: String;
    constructor(
        private rqManager: RequestManager,
        private pUpManager: PopUpManager,
    ) { }
    /**
       * getTiposComprobante
       * If the response has errors in the OAS API it should show a popup message with an error.
       * If the response suceed, it returns the data of the object.
       * @param id object to get in the DB
       * @param param object with the params to get in the DB
       * @returns  <Observable> data of the object registered at the DB. undefined if the request has errors
       */
    public getTiposComprobante(id?: any, params?: any) {
        this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
        return this.rqManager.get('tipo_comprobante/' + id).pipe(
            map(
                (res) => {
                    if (res === 'error') {
                        this.pUpManager.showErrorAlert('No se pudo consultar los tipos de comprobante');
                        return undefined;
                    }
                    return res;
                },
            ),
        );

    }
    /**
       * tipoComprobanteRegister
       * If the response has errors in the OAS API it should show a popup message with an error.
       * If the response suceed, it returns the data of the updated object.
       * @param data object to save in the DB
       * @returns  <Observable> data of the object registered at the DB. undefined if the request has errors
       */
    public tipoComprobanteRegister(data) {
        this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
        return this.rqManager.post(`tipo_comprobante/`, data).pipe(
            map(
                (res) => {
                    if (res['Type'] === 'error') {
                        this.pUpManager.showErrorAlert(res['Message']);
                        return undefined;
                    }
                    return res;
                },
            ),
        );

    }

    /**
     * tipoComprobanteUpdate
     * If the response has errors in the OAS API it should show a popup message with an error.
     * If the response is successs, it returns the data of the updated object.
     * @param data fields to update
     * @returns  <Observable> object updated information. undefined if the proccess has errors.
     */
    public tipoComprobanteUpdate(data) {
        const id = data.Codigo;
        data.Codigo = '';
        this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
        return this.rqManager.put('tipo_comprobante/', data, id).pipe(
            map(
                (res) => {
                    return res;
                },
            ),
        );

    }

    /**
     * tipoComprobanteDelete
     * If the response has errors in the OAS API it should show a popup message with an error.
     * If the response is successs, it returns the data of the updated object.
     * @param id the id of the object to remove in the DB.
     * @returns  <Observable> object with api response. undefined if the proccess has errors
     */
    public tipoComprobanteDelete(id: number, params?: any) {
        this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
        return this.rqManager.delete('tipo_comprobante', id.toString()).pipe(
            map(
                (res) => {
                    return res;
                },
            ),
        );

    }

}
