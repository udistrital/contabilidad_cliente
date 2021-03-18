export const CONFIGURACION_TABLA: any = {
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
            key: 'tipoEmpleado',
            title: {
                name: 'Tipo de empleado',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'tipoComprobante',
            title: {
                name: 'Tipo de Comprobante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'numero',
            title: {
                name: 'Número Comprobante',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'aprobado',
            title: {
                name: 'Aprobado',
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
                name: 'verRegistro',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Aprobar',
            },
            {
                name: 'borrarRegistro',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Registro',
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
export const DATOS_TABLA: any = [
    {
        fecha: '30/01/2020',
        tipoEmpleado: 'Docente',
        tipoComprobante : 'P',
        numero: '16',
        aprobado: 'No',
    },
    {
        fecha: '30/01/2020',
        tipoEmpleado: 'Administrativo',
        tipoComprobante : 'P',
        numero: '17',
        aprobado: 'Si',
    },
];


// contabilizacion

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
                class: 'text-right',
            }
        },
        {
            key: 'credito',
            title: {
                name: 'Crédito',
                class: 'text-center',
            },
            pipe: {
                class: 'text-right',
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
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-1',
                title: 'Ver Detalle',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_CONTABILIZACION: any = [
    {
        secuencia: '001',
        nit: '52114561',
        cuenta : '5101010000',
        nombreCuenta: 'Sueldos',
        detalle: 'MES ENERO 1 1 SUELDO BÁSICO',
        debito : '5.734.861.356',
        credito : '0',

    },
    {
        secuencia: '002',
        nit: '52128607',
        cuenta : '5101010000',
        nombreCuenta: 'Sueldos',
        detalle: 'MES ENERO 1 1 SUELDO BÁSICO',
        debito : '142.629.961',
        credito : '0',

    },
    {
        secuencia: '003',
        nit: '93344654',
        cuenta : '5101030000',
        nombreCuenta: 'Horas Extras Y Festivos',
        detalle: 'MES ENERO 1 76 HORAS EXTRAS',
        debito : '0',
        credito : '62.459.200',

    },
    {
        secuencia: '004',
        nit: '10546389',
        cuenta : '5101030000',
        nombreCuenta: 'Horas Extras Y Festivos',
        detalle: 'MES ENERO 1 76 HORAS EXTRAS',
        debito : '0',
        credito : '5.734.861.356',

    },
    {
        secuencia: '005',
        nit: '7165116',
        cuenta : '5101100000',
        nombreCuenta: 'Prima Técnica',
        detalle: 'MES ENERO 1 11 PRIMA TECNICA',
        debito : '0',
        credito : '142.629.961',

    },
    {
        secuencia: '006',
        nit: '7215388',
        cuenta : '5101100000',
        nombreCuenta: 'Prima Técnica',
        detalle: 'MES ENERO 1 11 PRIMA TECNICA',
        debito : '62.459.200',
        credito : '0',

    },


];

// desagregacion

export const CONFIGURACION_DESAGREGACION: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'devengo',
            title: {
                name: 'Devengo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'valorDevengo',
            title: {
                name: 'Valor Devengo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'descuento',
            title: {
                name: 'Descuento',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'valorDescuento',
            title: {
                name: 'Valor Descuento',
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
export const DATOS_DESAGREGACION: any = [
    {
        devengo: '1 1 SUELDO BASICO',
        valorDevengo: '2767588',
        descuento : '',
        valorDescuento: '',
    },
    {
        devengo: '1 174 PRIMA POR ANTIGUEDAD',
        valorDevengo: '193731',
        descuento : '',
        valorDescuento: '',
    },
    {
        devengo: '1 175 PRIMA SECRETARIAL',
        valorDevengo: '249083',
        descuento : '',
        valorDescuento: '',
    },
    {
        devengo: '1 5 SUBSIDIO FAMILIAR',
        valorDevengo: '207564',
        descuento : '',
        valorDescuento: '',
    },
    {
        devengo: '',
        valorDevengo: '',
        descuento : '2 133 COMENSAR PLAN COMPLEMENTARIO',
        valorDescuento: '179340',
    },
    {
        devengo: '',
        valorDevengo: '',
        descuento : '2 14 U.D. PRESTAMO',
        valorDescuento: '60715',
    },
    {
        devengo: '',
        valorDevengo: '',
        descuento : '2 202 SUMA EMERGENCIAS S.A',
        valorDescuento: '93237',
    },

];
