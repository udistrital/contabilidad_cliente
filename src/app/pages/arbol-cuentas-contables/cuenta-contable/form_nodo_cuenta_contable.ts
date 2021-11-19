import { ReactiveFormStructure } from './../../../@theme/components/reactive-form/reactive-form-structure';
import { FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../@core/_custom-validators/custom-validators';

export let myForm: ReactiveFormStructure = {
  controls: [{
      key: 'group',
      controls: [{
          key: 'listado',
          type: 'autocomplete',
          label: 'prueba',
          defaultValue: '',
          placeholder: 'Listado seleccionable',
          validators: [CustomValidators.customRequired('Campo Requerido')],
          optionList: {
            elements: () => [{
              ab: 'calor a'
            }, {
              ab: 'dqwqw'
            }, {
              ab: 'calor f'
            }],
            labelKey: 'ab',
            valueKey: 'ab'
          }
        },
        {
          key: 'button',
          type: 'button',
          label: 'Submit',
          buttonAction: (parent: FormGroup) => {
            parent.get('listado').setValue('Cambiado papulin');
          }
        }
      ]
    },
    {
      key: 'control',
      type: 'autocomplete',
      label: 'prueba2',
      defaultValue: '',
      validators: [Validators.required],
      errorMsg: 'Campo requerido',
      optionList: {
        elements: () => [{
          ab: 'q112'
        }, {
          ab: 'qwe'
        }, {
          ab: 'ghg f'
        }],
        labelKey: 'ab',
        valueKey: 'ab'
      }
    },
    {
      key: 'input',
      type: 'input',
      inputType: 'text',
      label: 'prueba input',
      defaultValue: 'Hola',
      validators: [Validators.required],
      errorMsg: 'Campo requerido',
      hintMsg: 'Soy un hjint jejeje'
    },
    {
      key: 'button',
      type: 'button',
      label: 'Submit',
      buttonAction: (parent: FormGroup) => {
        parent.get('input').setValue('Cambiado papulin');
      }
    }
  ]
};
