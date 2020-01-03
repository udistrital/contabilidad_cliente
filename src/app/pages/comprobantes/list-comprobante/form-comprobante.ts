export let FORM_COMPROBANTE = {

    tipo_formulario: 'mini',
    titulo: 'Comprobante',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Comprobante',
    campos: [
        { //TODO: generate serial in field Codigo
            etiqueta: 'select',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'TipoComprobante',
            label_i18n: 'tipo_comprobante',
            placeholder_i18n: 'tipo_comprobante',
            requerido: true,
            tipo: 'TipoDocumento',
            key: 'TipoDocumento',
            opciones: []
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-8 col-md-8 col-sm-8 col-xs-8',
            nombre: 'Comprobante',
            label_i18n: 'comprobante',
            placeholder_i18n: 'comprobante',
            requerido: true,
            length: '5',
            tipo: 'text',
            prefix: {
                value: '',
            },
        },
        {
            etiqueta: 'textarea',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Descripcion',
            label_i18n: 'descripcion',
            placeholder_i18n: 'descripcion',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Numero',
            label_i18n: 'numero',
            placeholder_i18n: 'numero',
            requerido: true,
            length: '5',
            pattern: '^[1-9]{1,9}',
            tipo: 'number',
            prefix: {
                value: '',
            },
        }
    ],
};
