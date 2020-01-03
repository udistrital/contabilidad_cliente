export let FORM_TIPO_COMPROBANTE = {

    tipo_formulario: 'mini',
    titulo: 'Tipo Comprobante',
    btn: 'Guardar',
    alertas: true,
    modelo: 'TipoComprobante',
    campos: [
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'TipoDocumento',
            label_i18n: 'tipo_documento',
            placeholder_i18n: 'tipo_documento',
            requerido: true,
            length: '1',
            pattern: '^[a-zA-Z]{1}',
            tipo: 'text'
        },
        {
            etiqueta: 'textarea',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Descripcion',
            label_i18n: 'descripcion',
            placeholder_i18n: 'descripcion',
            requerido: true,
            tipo: 'text',
        }
    ],
};
