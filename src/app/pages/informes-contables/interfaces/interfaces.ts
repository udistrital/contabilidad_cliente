export const INFORMES_UNIVERSIDAD: string[] = [
    'CGN2015_002 Saldos operaciones reciprocas SI_convergencia',
    'DDC2015_100 Saldos operaciones reciprocas SI_convergencia',
    'CGN2015_001 Saldos y movimientos convergencia',
    'CGN2015_01 Variaciones Trimestrales',
    'Estado de cambio Patrimonio',
    'Estado situación Financiera',
    'Estado de resultados',
    'Balance Consolidado',
    'SIPROJ',
];
export const CONTRALORIA_DISTRITAL: string[] = [
    'CGN2015_002 Saldos operaciones reciprocas SI_convergencia',
    'DDC2015_100 Saldos operaciones reciprocas SI_convergencia',
    'CGN2015_001 Saldos y movimientos convergencia',
    'CGN2015_01 Variaciones Trimestrales',
    'Estado de cambio Patrimonio',
    'Estado situación Financiera',
    'Estado de resultados',
    'Balance Consolidado',
    'SIPROJ',
];
export const CONTADURIA_GENERAL: string[] = [
    'CGN2015_002 Saldos operaciones reciprocas SI_convergencia',
    'DDC2015_100 Saldos operaciones reciprocas SI_convergencia',
    'CGN2015_001 Saldos y movimientos convergencia',
];
export const SECRETARIA_HACIENDA: string[] = [
    'CGN2015_002 Saldos operaciones reciprocas SI_convergencia',
    'DDC2015_100 Saldos operaciones reciprocas SI_convergencia',
    'CGN2015_001 Saldos y movimientos convergencia',
];
export const MINISTERIO_EDUCACIÓN: string[] = [
    'Flujo Efectivo',
    'Plan Único de Cuentas',
];

export const ANEXOS: string[] = [
    'Efectivo y Equival Efectivo',
    'Inversiones',
    'Cuentas por Cobrar',
    'Prestamos por cobrar',
    'Inventarios',
    'Propiedades, Planta y Equipo',
    'Bienes Uso Público',
    'Activos Intangibles',
    'Otros Derechos y Garantias',
    'Cuentas por Pagar',
    'Beneficioas a Empleados y Plan de Activos',
    'Provisiones',
    'Otros Pasivos',
    'Activos Pasivos Contigentes',
    'Cuentas de orden',
    'Patrimonio',
    'Gastos',
    'Costos de Ventas',
    'Costos de Tranformación',
];


// --------------------- TABLAS ------------------------------------------- //


export const CONFIGURACION_TABLA_SALDOS_Y_MOV: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigo',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'nombreCuenta',
            title: {
                name: 'Nombre Cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'saldoInicial',
            title: {
                name: 'Saldo Inicial',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'debito',
            title: {
                name: 'Movimiento Débito',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'credito',
            title: {
                name: 'Movimiento Crédito',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'saldoFinal',
            title: {
                name: 'Saldo Final',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'saldoCorriente',
            title: {
                name: 'Saldo Corriente',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'saldoNoCorriente',
            title: {
                name: 'Saldo No Corriente',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'largo',
            title: {
                name: 'Largo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'tipo',
            title: {
                name: 'Corriente/ No corriente',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_SALDOS_Y_MOV: any = [
    {
        codigo: '1',
        nombreCuenta: 'ACTIVOS',
        saldoInicial : '3.495.879.464.832,00',
        debito: '590.769.118.265,00 ',
        credito: '363.757.394.133,00 ',
        saldoFinal: '3.722.891.188.964,00 ',
        saldoCorriente: '352.161.883.153,00 ',
        saldoNoCorriente: '3.370.729.305.811,00 ',
        largo: '1',
        tipo: ' ',
    },
    {
        codigo: '1.1',
        nombreCuenta: 'EFECTIVO Y EQUIVALENTES AL EFECTIVO',
        saldoInicial : '80.398.237.767,00',
        debito: '190.140.736.274,00',
        credito: '201.343.373.413,00',
        saldoFinal: '69.195.600.628,00',
        saldoCorriente: '69.195.600.628,00',
        saldoNoCorriente: '69.195.600.628,00',
        largo: '3',
        tipo: ' ',
    },
    {
        codigo: '1.1.10',
        nombreCuenta: 'DEPÓSITOS EN INSTITUCIONES FINANCIERAS',
        saldoInicial : '37.634.838,00 ',
        debito: '53.777.267.527,00',
        credito: '53.770.188.588,00',
        saldoFinal: '69.195.600.628,00',
        saldoCorriente: '69.195.600.628,00',
        saldoNoCorriente: '69.195.600.628,00',
        largo: '6',
        tipo: ' ',
    },
];

export const CONFIGURACION_TABLA_SALDOS_Y_OP1: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigoSubcuenta',
            title: {
                name: 'Código Contable de la Subcuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'nombreSubcuenta',
            title: {
                name: 'Nombre de la Subcuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'codigoEntidad',
            title: {
                name: 'Código Entidad',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'nombreEntidad',
            title: {
                name: 'Nombre de la Entidad',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'valorCorriente',
            title: {
                name: 'Valor Corriente',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'valorNoCorriente',
            title: {
                name: 'Valor No Corriente',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_SALDOS_Y_OP1: any = [
    {
        codigoSubcuenta: '1.3.37.12',
        nombreSubcuenta: 'Otras Transferencias',
        codigoEntidad : '210111001',
        nombreEntidad: 'Bogotá D.C.',
        valorCorriente: '498.333.219',
        valorNoCorriente: '0',
    },
    {
        codigoSubcuenta: '1.3.37.12',
        nombreSubcuenta: 'Otras Transferencias',
        codigoEntidad : '112525000',
        nombreEntidad: 'Departamento de Cundinamarca',
        valorCorriente: '860.005.345',
        valorNoCorriente: '0',
    },
    {
        codigoSubcuenta: '1.3.37.12',
        nombreSubcuenta: 'Otras Transferencias',
        codigoEntidad : '119797000',
        nombreEntidad: 'Departamento de Vaupes',
        valorCorriente: '198.729.631',
        valorNoCorriente: '0',
    },
];

export const CONFIGURACION_TABLA_SALDOS_Y_OP_DDC: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigoSubcuenta',
            title: {
                name: 'Código Contable de la Subcuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'nombreSubcuenta',
            title: {
                name: 'Nombre de la Subcuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'codigoEntidad',
            title: {
                name: 'Código Entidad',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'nombreEntidad',
            title: {
                name: 'Nombre de la Entidad',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'valorCorriente',
            title: {
                name: 'Valor Corriente',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'valorNoCorriente',
            title: {
                name: 'Valor No Corriente',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_SALDOS_Y_OP_DCC: any = [
    {
        codigoSubcuenta: '1.3.37.12',
        nombreSubcuenta: 'Otras Transferencias',
        codigoEntidad : '210111001',
        nombreEntidad: 'Bogotá D.C.',
        valorCorriente: '498.333.219',
        valorNoCorriente: '0',
    },
    {
        codigoSubcuenta: '1.3.37.12',
        nombreSubcuenta: 'Otras Transferencias',
        codigoEntidad : '112525000',
        nombreEntidad: 'Departamento de Cundinamarca',
        valorCorriente: '860.005.345',
        valorNoCorriente: '0',
    },
    {
        codigoSubcuenta: '1.3.37.12',
        nombreSubcuenta: 'Otras Transferencias',
        codigoEntidad : '119797000',
        nombreEntidad: 'Departamento de Vaupes',
        valorCorriente: '198.729.631',
        valorNoCorriente: '0',
    },
];

export const CONFIGURACION_TABLA_VARIACIONES: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 's',
            title: {
                name: 'S',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'cuenta',
            title: {
                name: 'Cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'nada',
            title: {
                name: ' ',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'descripcion',
            title: {
                name: 'Descripción',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'variacion',
            title: {
                name: 'Variación',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_VARIACIONES: any = [
    {
        s: 'D',
        cuenta: '1',
        nada : ' ',
        descripcion: 'ACTIVOS',
        variacion: '304.651.338.713,00',
    },
    {
        s: 'D',
        cuenta: '1.1',
        nada : ' ',
        descripcion: 'EFECTIVO Y EQUIVALENTES AL EFECTIVO',
        variacion: '11.209.716.078,00',
    },
    {
        s: 'D',
        cuenta: '1.1.10',
        nada : ' ',
        descripcion: 'DEPPÓSITOS EN INSTRITUCIONES FINANCIERAS',
        variacion: '11.209.716.078,00',
    },
];
export const CONFIGURACION_TABLA_BALANCE: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'grupo',
            title: {
                name: 'Grupo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'cuenta',
            title: {
                name: 'Cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'subCuenta',
            title: {
                name: 'SubCuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'auxiliar',
            title: {
                name: 'Auxiliar',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'subAuxiliar',
            title: {
                name: 'SubAuxiliar',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'descripcion',
            title: {
                name: 'Descipción',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'movimiento',
            title: {
                name: 'Ult.Mov',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'saldoAnterior',
            title: {
                name: 'Saldo Anterior',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'debito',
            title: {
                name: 'Débitos',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'credito',
            title: {
                name: 'Créditos',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'nuevoSaldo',
            title: {
                name: 'Nuevo Saldo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'CGN2015_001',
            title: {
                name: 'CGN2015_001',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'diferencias',
            title: {
                name: 'Diferencias',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_BALANCE: any = [
    {
        grupo: '11',
        cuenta: ' ',
        subCuenta : ' ',
        auxiliar: '11',
        subAuxiliar: '1.1',
        descripcion: 'EFECTIVO Y EQUIVALENTES AL EFECTIVO',
        movimiento: '2020/13/31',
        saldoAnterior: '80398237767',
        debito: '190140736274',
        credito: '201343373413',
        nuevoSaldo: '69195600628',
        CGN2015_001: '69195600628',
        diferencias: ' ',
    },
    {
        grupo: '11',
        cuenta: '10',
        subCuenta : ' ',
        auxiliar: '1110',
        subAuxiliar: '1.1.10',
        descripcion: 'DEPÓSITOS EN INSTITUCIONES FINANCIERAS',
        movimiento: '2020/13/31',
        saldoAnterior: '80398237767',
        debito: '190140736274',
        credito: '201343373413',
        nuevoSaldo: '69195600628',
        CGN2015_001: '69195600628',
        diferencias: ' ',
    },
    {
        grupo: '12',
        cuenta: ' ',
        subCuenta : ' ',
        auxiliar: '12',
        subAuxiliar: '1.2',
        descripcion: 'INVERSIONES E INSTRUMENTOS DERIVADOS',
        movimiento: '2020/13/31',
        saldoAnterior: '40768265307',
        debito: '1959692866',
        credito: '9941577798',
        nuevoSaldo: '32786380375',
        CGN2015_001: '32786380375',
        diferencias: ' ',
    },
    {
        grupo: '12',
        cuenta: '21',
        subCuenta : ' ',
        auxiliar: '1221',
        subAuxiliar: '1.2.21',
        descripcion: 'INVERSIONES DE ADMINISTRACIÓN DE LIQUIDEZ A VALOR',
        movimiento: '2020/13/31',
        saldoAnterior: '40768265307',
        debito: '1959692866',
        credito: '9941577798',
        nuevoSaldo: '32786380375',
        CGN2015_001: '32786380375',
        diferencias: ' ',
    },

];
export const CONFIGURACION_FINANCIERA: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigo',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'descripcion',
            title: {
                name: 'Descripción',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'nota',
            title: {
                name: 'Nota',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'anno1',
            title: {
                name: 'Año 2019',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'anno2',
            title: {
                name: 'Año 2020',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_FINANCIERA: any = [
    {
        codigo: '1',
        descripcion: 'ACTIVO',
        nota : ' ',
        anno1: '3.472.705.575.190 ',
        anno2: '3.722.891.188.964 ',
    },
    {
        codigo: ' ',
        descripcion: 'ACTIVO CORRIENTE',
        nota : ' ',
        anno1: '318.400.492.256 ',
        anno2: '352.161.883.153 ',
    },
    {
        codigo: '11',
        descripcion: 'EFECTIVO Y EQUIVALENTES AL EFECTIVO',
        nota : ' ',
        anno1: '63.297.684.012 ',
        anno2: '69.195.600.628 ',
    },
    {
        codigo: '1110',
        descripcion: 'DEPÓSITOS EN INSTITUCIONES FINANCIERAS',
        nota : ' ',
        anno1: '63.297.684.012 ',
        anno2: '69.195.600.628 ',
    },
];

export const CONFIGURACION_RESULTADOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigo',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'descripcion',
            title: {
                name: 'Descripción',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'nota',
            title: {
                name: 'Nota',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'anno1',
            title: {
                name: 'Año 2019',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'anno2',
            title: {
                name: 'Año 2020',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_RESULTADOS: any = [
    {
        codigo: ' ',
        descripcion: 'INGRESOS OPERACIONALES',
        nota : ' ',
        anno1: '359.637.620.101',
        anno2: '350.552.310.541',
    },
    {
        codigo: '41',
        descripcion: 'INGRESOS FISCALES',
        nota : ' ',
        anno1: '27.723.943.149',
        anno2: '3.077.227.409',
    },
    {
        codigo: '4110',
        descripcion: 'NO TRIBUTARIOS',
        nota : ' ',
        anno1: '27.723.943.149',
        anno2: '3.077.227.409',
    },
    {
        codigo: '4195',
        descripcion: 'DEVOLUCIONES Y DESCUENTOS (Db)  ',
        nota : ' ',
        anno1: '-8.992.908',
        anno2: '0',
    },
];
export const CONFIGURACION_PATRIMONIO: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigo',
            title: {
                name: ' ',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'detalle',
            title: {
                name: 'Detalle de la Variaciones Patrimoniales',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'anno1',
            title: {
                name: 'Diciembre 2019',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'anno2',
            title: {
                name: 'Diciembre 2020',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'variacion',
            title: {
                name: 'Variaciones',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_PATRIMONIO: any = [
    {
        codigo: ' ',
        detalle: 'INCREMENTOS',
        anno1 : ' ',
        anno2: ' ',
        variacion: ' ',
    },
    {
        codigo: '3109',
        detalle: 'RESULTADOS DE EJERCICIOS ANTERIORES',
        anno1 : '2.278.727.659.714',
        anno2: '2.419.426.194.865',
        variacion: '140.698.535.151',
    },
    {
        codigo: '3151',
        detalle: 'GANANCIAS O PÉRDIDAS POR PLANES DE BENEFICIOS',
        anno1 : '31.389.982.297',
        anno2: '40.180.831.753',
        variacion: '71.570.814.050',
    },
    {
        codigo: ' ',
        detalle: 'TOTAL INCREMENTOS',
        anno1 : ' ',
        anno2: ' ',
        variacion: '212.269.349.201',
    },
    {
        codigo: ' ',
        detalle: 'DISMINUCIONES',
        anno1 : ' ',
        anno2: ' ',
        variacion: ' ',
    },
    {
        codigo: '3110',
        detalle: 'RESULTADO DEL EJERCICIO',
        anno1 : '115.022.882.693',
        anno2: '103.208.434.765',
        variacion: '-11.814.447.928',
    },
    {
        codigo: ' ',
        detalle: 'TOTAL DISMINUCIONES',
        anno1 : ' ',
        anno2: ' ',
        variacion: '-11.814.447.928',
    },
    {
        codigo: ' ',
        detalle: 'PARTIDAS SIN VARIACION',
        anno1 : ' ',
        anno2: ' ',
        variacion: ' ',
    },
    {
        codigo: '3105',
        detalle: 'CAPITAL FISCAL',
        anno1 : '93.821.892.396 ',
        anno2: '93.821.892.396 ',
        variacion: '0',
    },
    {
        codigo: ' ',
        detalle: 'PARTIDAS SIN VARIACIONCIONES',
        anno1 : ' ',
        anno2: ' ',
        variacion: '0',
    },
    {
        codigo: ' ',
        detalle: 'TOTAL VARIACION',
        anno1 : ' ',
        anno2: ' ',
        variacion: '200.454.901.273',
    },
];

export const CONFIGURACION_SIPROJ: any = {
    title: {
        name: 'INFORMACIÓN CONTABLE | INFORMACIÓN APLICATIVO PROCESOS JUDICIALES | DIFERENCIAS ',
        class: 'text-center',
        actionClass: 'd-flex flex-row justify-content-around align-middle'
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigo',
            title: {
                name: 'Código Contable',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'denominacion',
            title: {
                name: 'Denominación',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },
        {
            key: 'procesos',
            title: {
                name: 'NO. Procesos en Contablidad',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'saldo',
            title: {
                name: 'Saldo en Contablidad',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'procesosSinCumplimiento',
            title: {
                name: 'No. Procesos Terminados SIN cumplimiento (con erogación económica) ',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'procesosProbables',
            title: {
                name: 'No. Procesos Obligaciones Probables',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'procesosPosibles',
            title: {
                name: 'No. Procesos Obligaciones Posibles ',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'procesosSinObligacion',
            title: {
                name: 'No. Procesos Sin Obligación',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'valorReporte',
            title: {
                name: 'Valor en el Reporte ',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'diferenciaProceso',
            title: {
                name: 'Diferencia No. Procesos',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'diferenciaValores',
            title: {
                name: 'Diferencia en Valores',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'justificacion',
            title: {
                name: 'Justificación Diferencia',
                class: 'text-center',
            },
            pipe: {
                class: 'text-left',
            }
        },

    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_SIPROJ: any = [
    {
        codigo: '2701',
        denominacion: 'Litigios y demandas',
        procesos : '30',
        saldo: '1.127.665.027',
        procesosSinCumplimiento: ' ',
        procesosProbables: '34',
        procesosPosibles: ' ',
        procesosSinObligacion: ' ',
        valorReporte: '1.127.665.027',
        diferenciaProceso: '-4',
        diferenciaValores: '0',
        justificacion: ' ',
    },
    {
        codigo: '270101',
        denominacion: 'Civiles',
        procesos : ' ',
        saldo: '204.961.260',
        procesosSinCumplimiento: ' ',
        procesosProbables: '1',
        procesosPosibles: ' ',
        procesosSinObligacion: ' ',
        valorReporte: '204.961.260',
        diferenciaProceso: '0',
        diferenciaValores: '0',
        justificacion: 'Sin valoración inicial',
    },
    {
        codigo: '270102',
        denominacion: 'Penales',
        procesos : ' ',
        saldo: '0',
        procesosSinCumplimiento: ' ',
        procesosProbables: '0',
        procesosPosibles: ' ',
        procesosSinObligacion: ' ',
        valorReporte: '0',
        diferenciaProceso: '0',
        diferenciaValores: '0',
        justificacion: ' ',
    },
];
export const CONFIGURACION_FLUJO_EFECTIVO: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'anno',
            title: {
                name: 'Año',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'trimestre',
            title: {
                name: 'Trimestre',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'idItem',
            title: {
                name: 'ID_ITEM_FLUJO_EFECTIVO',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'valorActual',
            title: {
                name: 'VALOR_PERIODO_ACTUAL',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'valorAnterior',
            title: {
                name: 'VALOR_PERIODO_ANTERIOR',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },


    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_FLUJO_EFECTIVO: any = [
    {
        anno: '2020',
        trimestre: '4',
        idItem : '1',
        valorActual: '126171170883',
        valorAnterior: '41508509312',

    },
    {
        anno: '2020',
        trimestre: '4',
        idItem : '2',
        valorActual: '0',
        valorAnterior: '0',

    },
    {
        anno: '2020',
        trimestre: '4',
        idItem : '3',
        valorActual: '22286011968',
        valorAnterior: '27208092055',

    },
];
export const CONFIGURACION_PLAN_UNICO: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'anno',
            title: {
                name: 'Año',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'trimestre',
            title: {
                name: 'Trimestre',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'id_puc',
            title: {
                name: 'ID_PUC',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'valorTotal',
            title: {
                name: 'VALOR_TOTAL',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'saldoCorriente',
            title: {
                name: 'SALDO_CORRIENTE',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },
        {
            key: 'saldoNoCorriente',
            title: {
                name: 'SALDO_NO_CORRIENTE',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
            }
        },


    ],
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_PLAN_UNICO: any = [
    {
        anno: '2020',
        trimestre: '4',
        id_puc : '111005',
        valorTotal: '44713777',
        saldoCorriente: '44713777',
        saldoNoCorriente: '0',
    },
    {
        anno: '2020',
        trimestre: '4',
        id_puc : '111006',
        valorTotal: '69150886851',
        saldoCorriente: '69150886851',
        saldoNoCorriente: '0',
    },
    {
        anno: '2020',
        trimestre: '4',
        id_puc : '122102',
        valorTotal: '17376978619',
        saldoCorriente: '17376978619',
        saldoNoCorriente: '0',
    },
];


