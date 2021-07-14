const activeData =  { Label: 'Si', Id: true };
const unActiveData =  { Label: 'No', Id: false };
export let FORM_NODO_CUENTA_CONTABLE = {

    tipo_formulario: 'mini',
    alertas: true,
    modelo: 'NodoCuentaContable',
    campos: [
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Codigo',
            label_i18n: 'Código',
            placeholder_i18n: 'Código',
            requerido: true,
            pattern: '^[1-9]{1,9}',
            tipo: 'text',
            prefix: {
                value: '',
            },
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Nombre',
            label_i18n: 'Nombre',
            placeholder_i18n: 'Nombre del Rubro',
            requerido: true,
            tipo: 'text',
        },

        {
            etiqueta: 'select',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'DetalleCuentaID',
            label_i18n: 'Detalle Cuenta',
            placeholder_i18n: 'Detalle Cuenta',
            requerido: true,
            tipo: 'Detalle Cuenta',
            key: 'Label',
            opciones: [
                { Label: 1 },
                { Label: 2 },
                { Label: 3 }
            ],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'NaturalezaCuentaID',
            label_i18n: 'Naturaleza',
            placeholder_i18n: 'Naturaleza',
            requerido: true,
            tipo: 'NaturalezaCuentaID',
            key: 'Label',
            opciones: [
                { ID: 1, Label: 2 },
                { ID: 2 , Label: 2},
                { ID: 3 , Label: 2}
            ],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-md-6',
            nombre: 'CuentaAlterna',
            label_i18n: 'Cuenta Alterna',
            placeholder_i18n: 'Cuenta Alterna',
            requerido: true,
            tipo: 'CuentaAlterna',
            key: 'Label',
            opciones: [
                activeData,
                unActiveData,
            ],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-md-6',
            nombre: 'CodigoCuentaAlterna',
            label_i18n: 'Código alterno',
            placeholder_i18n: 'Código alterno',
            requerido: true,
            pattern: '^[0-9]{1,9}',
            tipo: 'number',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-md-12',
            nombre: 'NombreCuentaAlterna',
            label_i18n: 'Nombre cuenta alterna',
            placeholder_i18n: 'Nombre cuenta',
            requerido: false,
            tipo: 'text',
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Ajustable',
            label_i18n: 'Ajustable',
            placeholder_i18n: 'Ajustable',
            requerido: true,
            tipo: 'Ajustable',
            key: 'Label',
            opciones: [
                activeData,
                unActiveData,
            ],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'MonedaID',
            label_i18n: 'Tipo Moneda',
            placeholder_i18n: 'Tipo Moneda',
            requerido: true,
            tipo: 'MonedaID',
            key: 'Label',
            opciones: [
                { Label: 1 },
                { Label: 2 },
                { Label: 3 }
            ],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'RequiereTercero',
            label_i18n: 'Requiere tercero',
            placeholder_i18n: 'Requiere tercero',
            requerido: true,
            tipo: 'RequiereTercero',
            key: 'Label',
            opciones: [
                activeData,
                unActiveData,
            ],
        },

        {
            etiqueta: 'select',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'CentroDecostosID',
            label_i18n: 'Centro de costos',
            placeholder_i18n: 'Centro de costos',
            requerido: true,
            tipo: 'CentroDecostosID',
            key: 'Label',
            opciones: [
                { Label: 1 },
                { Label: 2 },
            ],
        },

        {
            etiqueta: 'select',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Nmnc',
            label_i18n: 'NMNC',
            placeholder_i18n: 'NMNC',
            requerido: true,
            tipo: 'Nmnc',
            key: 'Label',
            opciones: [
                activeData,
                unActiveData,
            ],
        },
    ],
};
