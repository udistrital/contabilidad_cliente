
import { Injectable } from '@angular/core';
import { DATOS_LISTA_PROVISION} from '../../../pages/provisiones/interfaces/interfaces';

@Injectable({
    providedIn: 'root',
})
export class ProvisionesHelper {

    nuevaProvision : any;
    tipoNomina = " ";
    listaProvisiones : any[] = [];
    TablaProvision = DATOS_LISTA_PROVISION;
    

    constructor() {
     }

    reiniciar(){

        this.nuevaProvision = {}
        this.tipoNomina = " ";
        this.listaProvisiones = [];
        this.TablaProvision = DATOS_LISTA_PROVISION;
    }

}
