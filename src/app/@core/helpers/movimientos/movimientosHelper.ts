import { RequestManager } from '../../managers/requestManager';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PopUpManager } from '../../managers/popUpManager';


@Injectable({
    providedIn: 'root',
})

export class MovimientosHelper {

    constructor(
        private rqManager: RequestManager,
        private pUpManager: PopUpManager,
    ) { }

    /**
    * postMovimiento
    * Registra un movimiento
    * @param data data del movimiento
    * @returns  <Observable> data of the object registered at the DB. undefined if the request has errors
    */
    public postMovimiento(data: object) {
        this.rqManager.setPath('PLAN_CUENTAS_MID_SERVICE');
        return this.rqManager.post('movimiento', data).pipe(
            map(
                (res: object) => {
                    if (res["Type"] === 'error') {
                        this.pUpManager.showErrorAlert('No se pudo expedir el CDP');
                        return undefined;
                    }
                    return res;
                },
            ),
        );
    }

    /**
    * postMovimiento
    * Registra un movimiento
    * @param vigencia vigencia del movimiento
    * @param centroGestor centro gestor del movimiento
    * @param id id del documento presupuetal vinculado al movimiento
    * @returns  <Observable> data of the object registered at the DB. undefined if the request has errors
    */
   public getByDocumentoPresupuestal(vigencia: string, centroGestor: string, id: string) {
    this.rqManager.setPath('PLAN_CUENTAS_MONGO_SERVICE');
    return this.rqManager.get('movimiento/'+vigencia+'/'+centroGestor+'/'+id).pipe(
        map(
            (res: object) => {
                if (res["Type"] === 'error') {
                    return undefined;
                }
                return res;
            },
        ),
    );
}
}