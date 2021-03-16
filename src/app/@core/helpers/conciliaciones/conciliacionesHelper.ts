
import { Injectable } from '@angular/core';
import { DATOS_LISTA_CONCILIACIONES, CONFIGURACION_LISTA_CONCILIACIONES, DATOS_EXTRACTO, CONFIGURACION_EXTRACTO, DATOS_MOV_CONTABLE, CONFIGURACION_MOV_CONTABLE, DATOS_ESTADO_PAGO, CONFIGURACION_ESTADO_PAGO, DATOS_ND_LIBROS, DATOS_NC_LIBROS, DATOS_ND_EXTRACTO, DATOS_NC_EXTRACTO, CONFIGURACION_COMPARACION, DATOS_CONCILIACION, CONFIGURACION_CONCILIACION } from '../../../pages/conciliaciones/interfaces/interfaces';

@Injectable({
    providedIn: 'root',
})
export class ConciliacionesHelper {

    tablaConciliacion = DATOS_LISTA_CONCILIACIONES;
    configTabla = CONFIGURACION_LISTA_CONCILIACIONES;

    tablaExtracto = DATOS_EXTRACTO;
    configExtracto = CONFIGURACION_EXTRACTO;

    tablaMovContable = DATOS_MOV_CONTABLE;
    configMovContable = CONFIGURACION_MOV_CONTABLE;

    tablaEstadoPago = DATOS_ESTADO_PAGO;
    configEstadoPago = CONFIGURACION_ESTADO_PAGO;


    configTablaComparacion = CONFIGURACION_COMPARACION;
    datosNDLibros = DATOS_ND_LIBROS;
    datosNCLibros = DATOS_NC_LIBROS;
    datosNDExtracto = DATOS_ND_EXTRACTO;
    datosNCExtracto = DATOS_NC_EXTRACTO;

    datosConciliacion = DATOS_CONCILIACION;
    configConciliacion = CONFIGURACION_CONCILIACION;



    constructor() {
     }


    reiniciar() {

        this.tablaConciliacion = DATOS_LISTA_CONCILIACIONES;
        this.configTabla = CONFIGURACION_LISTA_CONCILIACIONES;
        this.tablaExtracto = DATOS_EXTRACTO;
        this.configExtracto = CONFIGURACION_EXTRACTO;
        this.tablaMovContable = DATOS_MOV_CONTABLE;
        this.configMovContable = CONFIGURACION_MOV_CONTABLE;
        this.tablaEstadoPago = DATOS_ESTADO_PAGO;
        this.configEstadoPago = CONFIGURACION_ESTADO_PAGO;

        this.datosNDLibros = DATOS_ND_LIBROS;
        this.configTablaComparacion = CONFIGURACION_COMPARACION;
        this.datosNCLibros = DATOS_NC_LIBROS;
        this.datosNDExtracto = DATOS_ND_EXTRACTO;
        this.datosNCExtracto = DATOS_NC_EXTRACTO;

        this.datosConciliacion = DATOS_CONCILIACION;
        this.configConciliacion = CONFIGURACION_CONCILIACION;

    }

}
