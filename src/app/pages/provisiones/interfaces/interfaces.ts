export const CONFIGURACION_LISTA_PROVISION: any = {
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
            key: 'mes',
            title: {
                name: 'Mes',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'tipodenomina',
            title: {
                name: 'Tipo de Nómina',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'centrogestor',
            title: {
                name: 'Centro Gestor',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'areaFuncional',
            title: {
                name: 'Área Funcional',
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
                name: 'verprovision',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Ver Provisión',
            },
            {
                name: 'borrarprovision',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Provisión',
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
export const DATOS_LISTA_PROVISION: any = [
    {
        consecutivo: '001',
        mes: 'Enero',
        tipodenomina : 'Administrativos',
        centrogestor: '230',
        areaFuncional: '01',
        fechainicial: '01/01/2020',
        fechafinal: '30/01/2020',
    },
    {
        consecutivo: '002',
        mes: 'Julio',
        tipodenomina : 'Docentes',
        centrogestor: '230',
        areaFuncional: '01',
        fechainicial: '01/07/2020',
        fechafinal: '30/07/2020',
    },
];

export const CONFIGURACION_CONCEPTOS: any = {

    showColumnTitle: true,
    dataConfig: [
        {
            key: 'conceptoProvision',
            title: {
                name: 'Concepto Provisión',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'porcentaje',
            title: {
                name: 'Porcentaje',
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
                name: 'borrarconcepto',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Concepto',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
};
export const DATOS_CONCEPTOS: any = [
    {
        conceptoProvision: 'Cesantias',
        porcentaje: 0.0833,
    },
    {
        conceptoProvision: 'Vacaciones',
        porcentaje: 0.0833,
    }
];


export const CONFIGURACION_REGIMEN: any = {

    showColumnTitle: true,
    dataConfig: [
        {
            key: 'regimen',
            title: {
                name: 'Régimen',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'porcentaje',
            title: {
                name: 'Porcentaje',
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
export const DATOS_REGIMEN: any = [
    {
        regimen: 'Antiguo',
        porcentaje: '61.62%',
        valor: '$40.532.601',
    },
    {
        regimen: 'Nuevo',
        porcentaje: '38.38%',
        valor: '$25.245.719',
    }
];


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
                class: 'text-justify',
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
            key: 'nombrecuenta',
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
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'ver',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Ver ',
            },
            {
                name: 'borrar',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar ',
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
        nit: '899999230',
        cuenta : '2511021100',
        nombrecuenta: 'Cesantias R',
        detalle: 'PROVISIÓN JULIO',
        debito: '$0',
        credito: '$417.085.380.00',
    },
    {
        secuencia: '002',
        nit: '899999230',
        cuenta : '2511031100',
        nombrecuenta: 'Interéses C',
        detalle: 'PROVISIÓN JULIO',
        debito: '$0',
        credito: '$7.274.447.00',
    },
    {
        secuencia: '003',
        nit: '899999230',
        cuenta : '5107020100',
        nombrecuenta: 'Cesantias R',
        detalle: 'PROVISIÓN JULIO',
        debito: '$417.085.380.00',
        credito: '$0',
    },
    {
        secuencia: '004',
        nit: '899999230',
        cuenta : '7208090103',
        nombrecuenta: 'Interéses C',
        detalle: 'PROVISIÓN JULIO',
        debito: '$$7.274.447.00',
        credito: '$0',
    },
];


