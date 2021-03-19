
import { Injectable } from '@angular/core';
import * as informes from '../../../pages/informes-contables/interfaces/interfaces';


@Injectable({
    providedIn: 'root',
})
export class InformesContablesHelper {

    configTabla : any;
    datosTabla : any;
    titulo : string;

    tablaSaldosMov = informes.CONFIGURACION_TABLA_SALDOS_Y_MOV;
    datosSaldosMov = informes.DATOS_SALDOS_Y_MOV;

    tablaSaldosOPDD = informes.CONFIGURACION_TABLA_SALDOS_Y_OP_DDC;
    datosSaldosOPDD = informes.DATOS_SALDOS_Y_OP_DCC;

    tablaSaldosOPCN = informes.CONFIGURACION_TABLA_SALDOS_Y_OP1;
    datosSaldosOPCN = informes.DATOS_SALDOS_Y_OP1;

    tablaVariaciones = informes.CONFIGURACION_TABLA_VARIACIONES;
    datosVariaciones = informes.DATOS_VARIACIONES;

    tablaBalance = informes.CONFIGURACION_TABLA_BALANCE;
    datosBalance = informes.DATOS_BALANCE;

    tablaFinanciera = informes.CONFIGURACION_FINANCIERA;
    datosFinanciera = informes.DATOS_FINANCIERA;

    tablaResultados = informes.CONFIGURACION_RESULTADOS;
    datosResultados = informes.DATOS_RESULTADOS;

    tablaPatrimonio = informes.CONFIGURACION_PATRIMONIO;
    datosPatrimonio = informes.DATOS_PATRIMONIO;

    tablaSIPROJ = informes.CONFIGURACION_SIPROJ;
    datosSIPROJ = informes.DATOS_SIPROJ;


    constructor() {
        this.configTabla = informes.CONFIGURACION_TABLA_SALDOS_Y_MOV;
        this.datosTabla = informes.DATOS_SALDOS_Y_MOV;
    }

    TipoInforme(informe){
        this.titulo = informe;
        switch(informe) { 
            case "CGN2015_002 Saldos operaciones reciprocas SI_convergencia": { 
                this.configTabla = informes.CONFIGURACION_TABLA_SALDOS_Y_OP1;
                this.datosTabla = informes.DATOS_SALDOS_Y_OP1;
                break; 
            } 
            case "DDC2015_100 Saldos operaciones reciprocas SI_convergencia": { 
                this.configTabla = informes.CONFIGURACION_TABLA_SALDOS_Y_OP_DDC;
                this.datosTabla = informes.DATOS_SALDOS_Y_OP_DCC;
                break; 
            } 
            case "CGN2015_001 Saldos y movimientos convergencia": { 
                this.configTabla = informes.CONFIGURACION_TABLA_SALDOS_Y_MOV;
                this.datosTabla = informes.DATOS_SALDOS_Y_MOV;
                break; 
            } 
            case "CGN2015_01 Variaciones Trimestrales": { 
                this.configTabla = informes.CONFIGURACION_TABLA_VARIACIONES;
                this.datosTabla = informes.DATOS_VARIACIONES;
                break; 
            } 
            case "Estado de cambio Patrimonio": { 
                this.configTabla = informes.CONFIGURACION_PATRIMONIO;
                this.datosTabla = informes.DATOS_PATRIMONIO;
                break; 
            } 
            case "Estado situación Financiera": { 
                this.configTabla = informes.CONFIGURACION_FINANCIERA;
                this.datosTabla = informes.DATOS_FINANCIERA;
                break; 
            } 
            case "Estado de resultados": { 
                this.configTabla = informes.CONFIGURACION_RESULTADOS;
                this.datosTabla = informes.DATOS_RESULTADOS;
                break; 
            } 
            case "Balance Consolidado": { 
                this.configTabla = informes.CONFIGURACION_TABLA_BALANCE;
                this.datosTabla = informes.DATOS_BALANCE;
                break; 
            } 
            case "SIPROJ": { 
                this.configTabla = informes.CONFIGURACION_SIPROJ;
                this.datosTabla = informes.DATOS_SIPROJ;
                break; 
            } 
            case "Flujo Efectivo": { 
                this.configTabla = informes.CONFIGURACION_FLUJO_EFECTIVO;
                this.datosTabla = informes.DATOS_FLUJO_EFECTIVO;
                break; 
            } 
            case "Plan Único de Cuentas": { 
                this.configTabla = informes.CONFIGURACION_PLAN_UNICO;
                this.datosTabla = informes.DATOS_PLAN_UNICO;
                break; 
            } 
        } 
    }

}
