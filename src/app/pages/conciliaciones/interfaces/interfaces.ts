export const CONFIGURACION_LISTA_CONCILIACIONES: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'consecutivo',
            title: {
                name: 'Consecutivo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'fechaRegistro',
            title: {
                name: 'Fecha de Registro',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'banco',
            title: {
                name: 'Banco',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'cuentaBancaria',
            title: {
                name: 'Cuenta Bancaria',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'fechainicial',
            title: {
                name: 'Fecha Inicial',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'fechafinal',
            title: {
                name: 'Fecha Final',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },

    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'verconciliacion',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver Conciliación',
            },
            {
                name: 'contabilizacion',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Contabilización',
            },
            {
                name: 'borrarconciliacion',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Conciliación',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const DATOS_LISTA_CONCILIACIONES: any = [
    {
        consecutivo: '1',
        fechaRegistro: '10/07/2020',
        banco : 'Banco de Occidente',
        cuentaBancaria: '230-81462-6',
        fechainicial: '01/07/2020',
        fechafinal: '30/07/2020',

    },
    {
        consecutivo: '2',
        fechaRegistro: '10/08/2020',
        banco : 'Banco de Occidente',
        cuentaBancaria: '230-08124-4',
        fechainicial: '01/08/2020',
        fechafinal: '30/08/2020',
    },
];

export const CONFIGURACION_EXTRACTO: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'fechaMovimiento',
            title: {
                name: 'Fecha Movimiento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'nombre',
            title: {
                name: 'Nombre Transacción',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'debito',
            title: {
                name: 'Débitos',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'credito',
            title: {
                name: 'Créditos',
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
export const DATOS_EXTRACTO: any = [
    {
        fechaMovimiento: '2020/07/01',
        nombre: 'Pago Tercero ACH',
        debito : '2545035',
        credito: '0',
    },
    {
        fechaMovimiento: '2020/07/01',
        nombre: 'Pago Tercero ACH',
        debito : '2545035',
        credito: '0',
    },
    {
        fechaMovimiento: '2020/07/01',
        nombre: 'Reverso Pago Tercero ACH',
        debito : '0',
        credito: '3118550',
    },
    {
        fechaMovimiento: '2020/07/03',
        nombre: 'Intereses liquidados',
        debito : '0',
        credito: '549514',
    },
    {
        fechaMovimiento: '2020/07/06',
        nombre: 'Tranferencia DB OCCIRED',
        debito : '1130481179',
        credito: '0',
    },
    {
        fechaMovimiento: '2020/07/07',
        nombre: 'Pago Tercero en efectivo OCCIRED',
        debito : '2087172',
        credito: '0',
    },
    {
        fechaMovimiento: '2020/07/16',
        nombre: 'Tranferencia entre ctas occidente',
        debito : '0',
        credito: '3000000000',
    },
    {
        fechaMovimiento: '2020/07/21',
        nombre: 'Pago Tercero ACH',
        debito : '18119',
        credito: '0',
    },

];

export const CONFIGURACION_MOV_CONTABLE: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'fecha',
            title: {
                name: 'Fecha',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'comprobante',
            title: {
                name: 'Comprobante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'id',
            title: {
                name: 'ID',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'nombre',
            title: {
                name: 'Nombre',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'descripcion',
            title: {
                name: 'Descripción',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'debito',
            title: {
                name: 'Débitos',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'credito',
            title: {
                name: 'Créditos',
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
export const DATOS_MOV_CONTABLE: any = [
    {
        fecha: '2020/07/01',
        comprobante: 'G 007 0000000005217 001',
        id : '1.140.849.881',
        nombre: 'ARIZA CASTRO LILIANA',
        descripcion: 'G 007 0000000005217 001 1.140.849.881 ARIZA CASTRO LILIANA PAGO CORRESPONDIENTE AL MES DE JUNIO SERVICIOS D',
        debito: '0',
        credito: '2545035',

    },
    {
        fecha: '2020/07/01',
        comprobante: 'G 007 0000000005218 001',
        id : '79.586.121',
        nombre: 'AHUMADA DUARTE MARÍA',
        descripcion: 'G 007 0000000005218 001 79.586.121 AHUMADA DUARTE MARÍA PAGO CORRESPONDIENTE AL MES DE JUNIO SERVICIOS D',
        debito: '0',
        credito: '2120862',

    },
];

export const CONFIGURACION_ESTADO_PAGO: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'beneficiario',
            title: {
                name: 'Beneficiario',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'nit',
            title: {
                name: 'NIT',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'concepto',
            title: {
                name: 'Concepto',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'fechaPago',
            title: {
                name: 'Fecha de Pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'vr',
            title: {
                name: 'VR de Pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'estadoPago',
            title: {
                name: 'Estado de Pago',
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
export const DATOS_ESTADO_PAGO: any = [
    {
        beneficiario: 'ARIZA CASTRO LILIANA',
        nit: '1140849881',
        concepto : 'Abono cuenta entidad ACH',
        fechaPago: '2020/07/01',
        vr: '2545035',
        estadoPago: 'REALIZADO',

    },
    {
        beneficiario: 'AHUMADA DUARTE MARÍA',
        nit: '79.586.121',
        concepto : 'Abono cuenta entidad ACH',
        fechaPago: '2020/07/01',
        vr: '2545035',
        estadoPago: 'REALIZADO',

    },

];

// comparacion

export const CONFIGURACION_COMPARACION: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'fecha',
            title: {
                name: 'Fecha',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'detalle',
            title: {
                name: 'Detalle',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'valor',
            title: {
                name: 'Valor',
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
export const DATOS_ND_LIBROS: any = [
    {
        fecha: '2020/03/25',
        detalle: 'Diferencia por conciliar RA 42',
        valor : '6104175,00',

    },
];

export const DATOS_NC_LIBROS: any = [
    {
        fecha: '2020/07/30',
        detalle: 'Intereses Liquidados',
        valor : '2623613,01',

    },

];
export const DATOS_ND_EXTRACTO: any = [
    {
        fecha: '31/12/2019',
        detalle: 'G-7-15500-5 APARICIO ESCAMILLA FERNANDO- 79368039',
        valor : '1601107,00',

    },
    {
        fecha: '13/02/2020',
        detalle: 'N 007 00000000014 002-AJUSTE MAYOR VR CONTAB 27/12/2019 G8 NO.294',
        valor : '1000000,00',

    },
    {
        fecha: '2020/04/30',
        detalle: 'G 007 00000002056 006 52881151 SILVAPUENTES SANDRA LILIANA PAGO MARZO',
        valor : '831706,00',

    },

];

export const DATOS_NC_EXTRACTO: any = [
    {
        fecha: '30/04/2020',
        detalle: 'PENDIENTE DE IDENTIFICAR',
        valor : '-47668,00',

    },

];


// resumen 
export const CONFIGURACION_CONCILIACION: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'detalle',
            title: {
                name: 'Detalle',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'valores',
            title: {
                name: 'Valores',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'valor',
            title: {
                name: ' ',
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
export const DATOS_CONCILIACION: any = [
    {
        detalle: 'Saldo según extracto',
        valores: '20714566466,43',
        valor : '20714566466,43',
    },
    {
        detalle: 'Menos cheques pendientes de cobro',
        valores: '0',
        valor : ' ',
    },
    {
        detalle: 'Más notas crédito sin registrar extracto',
        valores: '-47668.00',
        valor : ' ',
    },
    {
        detalle: 'Menos notas débito sin registrar en libros',
        valores: '2.623.613.01',
        valor : ' ',
    },
    {
        detalle: 'Más notas debito sin registrar en libros',
        valores: '6104175.00',
        valor : ' ',
    },
    {
        detalle: 'Menos notas débito sin registrar extracto',
        valores: '0',
        valor : ' ',
    },
    {
        detalle: 'Extracto',
        valores: '11.326.520.00',
        valor : ' ',
    },
    {
        detalle: 'Más ajuste por aproximación',
        valores: '605,58',
        valor : ' ',
    },   
    {
        detalle: 'Saldo según auxiliar',
        valores: ' ',
        valor : '20706706446.00',
    },   
    {
        detalle: ' ',
        valores: ' ',
        valor : '0',
    },   
];


// comparacion

export const CONFIGURACION_CONTABILIZACION: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'secuencia',
            title: {
                name: 'Secuencia',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'nit',
            title: {
                name: 'NIT',
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
                class: 'text-center',
            }
        },
        {
            key: 'nombreCuenta',
            title: {
                name: 'Nombre Cuenta',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'detalle',
            title: {
                name: 'Detalle',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'debito',
            title: {
                name: 'Débito',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'credito',
            title: {
                name: 'Crédito',
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
export const DATOS_CONTABILIZACION_NC_libros: any = [
    {
        secuencia: '001',
        nit: 'xxxxx',
        cuenta : 'xxxxxx',
        nombreCuenta: 'xxxxxx',
        detalle: 'Intereses Liquidados Notas crédito No registradas en Libros',
        debito : '0',
        credito : '2623613,01',

    },
    {
        secuencia: '002',
        nit: 'xxxxx',
        cuenta : 'xxxxxx',
        nombreCuenta: 'xxxxxx',
        detalle: 'Intereses Liquidados Notas crédito No registradas en Libros',
        debito : '2623613,01',
        credito : '0',

    },
];
export const DATOS_CONTABILIZACION_ND_libros: any = [
    {
        secuencia: '001',
        nit: '51914734',
        cuenta : 'xxxxxx',
        nombreCuenta: 'xxxxxx',
        detalle: 'Diferencia por conciliar RA 42 Giro sin registrar en libros',
        debito : '0',
        credito : '6104175',

    },
    {
        secuencia: '002',
        nit: 'xxxxx',
        cuenta : 'xxxxxx',
        nombreCuenta: 'xxxxxx',
        detalle: 'Diferencia por conciliar RA 42 Giro sin registrar en libros',
        debito : '6104175',
        credito : '0',

    },
];