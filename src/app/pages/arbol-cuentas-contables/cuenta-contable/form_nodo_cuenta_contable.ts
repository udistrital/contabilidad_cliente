import { Validators } from '@angular/forms';

export let myForm = {
  Codigo: {
    key: 'Codigo',
    type: 'input',
    inputType: 'text',
    label: 'Código',
    defaultValue: 'dq',
    validators: [Validators.required],
    errorMsg: 'Campo requerido',
    hintMsg: 'Complete el código con la cifra consecutiva',
    prefix: '',
  },
  Activo: {
    key: 'Activo',
    type: 'checkbox',
    inputType: 'text',
    label: 'Disponible',
    defaultValue: true,
    validators: [Validators.required],
    errorMsg: 'Campo requerido',
    hintMsg: 'Complete el código con la cifra consecutiva',
    prefix: '1-01',
  },
  tipoCuenta: {
    key: 'tipoCuenta',
    type: 'select',
    label: 'Tipo Cuenta',
    defaultValue: null,
    placeholder: 'Listado seleccionable',
    validators: [Validators.required],
    optionList: {
      elements: () => [{
        ab: 'calor a'
      }, {
        ab: 'dqwqw'
      }, {
        ab: 'calor f'
      }],
      labelKey: 'ab'
    },
    errorMsg: 'Campo requerido',
  },
  NaturalezaCuentaID: {
    key: 'NaturalezaCuentaID',
    type: 'select',
    label: 'Naturaleza',
    defaultValue: null,
    placeholder: 'Listado seleccionable',
    validators: [Validators.required],
    optionList: {
      elements: () => [],
      labelKey: 'Label',
      idKey: 'Id'
    },
    errorMsg: 'Campo requerido',
  },
  DetalleCuentaID: {
    key: 'DetalleCuentaID',
    type: 'select',
    label: 'Detalle',
    defaultValue: null,
    placeholder: 'Listado seleccionable',
    validators: [Validators.required],
    optionList: {
      elements: () => [],
      labelKey: 'Label',
      idKey: 'Id'
    },
    errorMsg: 'Campo requerido',
  },
  Nombre: {
    key: 'Nombre',
    type: 'input',
    inputType: 'text',
    label: 'Nombre',
    defaultValue: 'lalala lalala',
    validators: [Validators.required],
    errorMsg: 'Campo requerido',
    hintMsg: 'Complete el código con la cifra consecutiva',
  },
  tieneCentroCostos: {
    key: 'tieneCentroCostos',
    type: 'checkbox',
    inputType: 'text',
    label: 'Centro de costos',
    defaultValue: true,
    validators: [Validators.required],
    errorMsg: 'Campo requerido',
    hintMsg: 'Complete el código con la cifra consecutiva',
    prefix: '1-01',
  },
  CentroDecostosID: {
    key: 'CentroDecostosID',
    type: 'select',
    label: 'Centro de costos',
    defaultValue: null,
    placeholder: 'Listado seleccionable',
    validators: [Validators.required],
    optionList: {
      elements: () => [],
      labelKey: 'Label',
      idKey: 'Id'
    },
    errorMsg: 'Campo requerido',
  },
  RequiereTercero: {
    key: 'RequiereTercero',
    type: 'checkbox',
    inputType: 'text',
    label: 'Requiere tercero',
    defaultValue: true,
    validators: [Validators.required],
    errorMsg: 'Campo requerido',
    hintMsg: 'Complete el código con la cifra consecutiva',
    prefix: '1-01',
  },
  tercero: {
    key: 'tercero',
    type: 'autocomplete',
    label: 'Tercero',
    defaultValue: null,
    placeholder: 'Tercero',
    validators: [Validators.required],
    optionList: {
      elements: () => [{
        ab: 'calor a'
      }, {
        ab: 'dqwqw'
      }, {
        ab: 'calor f'
      }],
      labelKey: 'ab'
    },
    errorMsg: 'Campo requerido',
  },
  Ajustable: {
    key: 'Ajustable',
    type: 'checkbox',
    inputType: 'text',
    label: 'Ajustable',
    defaultValue: false,
    validators: [Validators.required],
    errorMsg: 'Campo requerido',
    hintMsg: 'Complete el código con la cifra consecutiva',
    prefix: '1-01',
  },
  Nmnc: {
    key: 'Nmnc',
    type: 'checkbox',
    inputType: 'text',
    label: 'NMNC',
    defaultValue: false,
    validators: [Validators.required],
    errorMsg: 'Campo requerido',
    hintMsg: 'Complete el código con la cifra consecutiva',
    prefix: '1-01',
  },
  MonedaID: {
    key: 'MonedaID',
    type: 'select',
    label: 'Moneda',
    defaultValue: null,
    placeholder: 'Listado seleccionable',
    validators: [Validators.required],
    optionList: {
      elements: () => [],
      labelKey: 'Label',
      idKey: 'Id'
    },
    errorMsg: 'Campo requerido',
  }
};