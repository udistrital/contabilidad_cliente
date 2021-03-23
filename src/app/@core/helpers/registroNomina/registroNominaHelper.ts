
import { Injectable } from '@angular/core';
import { DATOS_TABLA, CONFIGURACION_TABLA, CONFIGURACION_CONTABILIZACION, DATOS_CONTABILIZACION, DATOS_DESAGREGACION, CONFIGURACION_DESAGREGACION} from '../../../pages/registro-nomina/interfaces/interfaces';


@Injectable({
    providedIn: 'root',
})
export class RegistroNominaHelper {

    datosTabla = DATOS_TABLA;
    configTabla = CONFIGURACION_TABLA;

    datosContabilizacion = DATOS_CONTABILIZACION;
    configContabilizacion = CONFIGURACION_CONTABILIZACION;

    datosDesagregacion = DATOS_DESAGREGACION;
    configDesagregacion = CONFIGURACION_DESAGREGACION;

    back: string = "consulta";
    contabilizacion: string = "lista";

    constructor() {
     }


    reiniciar() {

        this.datosTabla = DATOS_TABLA;
        this.configTabla = CONFIGURACION_TABLA;

        this.datosContabilizacion = DATOS_CONTABILIZACION;
        this.configContabilizacion = CONFIGURACION_CONTABILIZACION;

        this.datosDesagregacion = DATOS_DESAGREGACION;
        this.configDesagregacion = CONFIGURACION_DESAGREGACION;
    }

}
