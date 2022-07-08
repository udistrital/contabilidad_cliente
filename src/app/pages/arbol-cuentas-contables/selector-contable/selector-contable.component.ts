import { log } from 'console';
import { ReactiveFormControl, ReactiveFormGroup } from './../../../@theme/components/reactive-form/reactive-form-structure';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CustomValidators } from '../../../@core/_custom-validators/custom-validators';
import { selectAllCuentas } from '../../../@core/_store/selectors';
import { ReactiveFormStructure } from '../../../@theme/components/reactive-form/reactive-form-structure';

@Component({
  selector: 'ngx-selector-contable',
  templateUrl: './selector-contable.component.html',
  styleUrls: ['./selector-contable.component.scss'],
})
export class SelectorContableComponent implements OnInit {

  dataTree = this.store.pipe(select(selectAllCuentas));
  cuentasList = [];
  form = new FormGroup({});
  formValue: any = {};
  status = false;
  normaContable = [{
      key: 'grupo',
      label: 'Grupo*',
      parent: null,
      child: 'cuenta',
    },
    {
      key: 'cuenta',
      label: 'Cuenta*',
      parent: 'grupo',
      child: 'subcuenta',
    },
    {
      key: 'subcuenta',
      label: 'Subcuenta*',
      parent: 'cuenta',
      child: 'auxiliar',
    },
    {
      key: 'auxiliar',
      label: 'Auxiliar*',
      parent: 'subcuenta',
      child: 'subauxiliar',
    },
    {
      key: 'subauxiliar',
      label: 'Subauxiliar*',
      parent: 'auxiliar',
      child: null,
    },
  ];

  selectorForm: ReactiveFormStructure;

  @Output() selectAcount: EventEmitter < any > = new EventEmitter();

  @Input() account: string;

  @Input() claseMinima: number;

  @Input() editable: boolean;

  constructor(private store: Store < any > ) {}

  ngOnInit() {
    this.dataTree.subscribe((res) => {
      this.cuentasList = res;
    });
    try {
      this.setAcount();
      this.buildForm();
    } catch (error) {
      console.error(error);
    }

    this.form.valueChanges.subscribe((value) => {

      const control = this.selectorForm.controls[this.selectorForm.controls.length - 1];
      if (value && control ) {
        this.selectAcount.emit(value[control.key]);
      }
    });
  }

  public setAcount() {
    if (this.account) {
      const codigos = this.account.split('-');
      this.claseMinima = codigos.length;
      codigos.forEach((codigo, index) => {
        if (index === 0) {
          this.formValue[this.normaContable[index].key] = this.cuentasList.find((element) => {
            element.Nombre = `${element.data.Codigo} ${element.data.Nombre}`;
            return element.data.Codigo === codigo;
          });
        } else {
          this.formValue[this.normaContable[index].key] = this.formValue[this.normaContable[index].parent].children.find(
            (element) => {

              element.Nombre = `${element.data.Codigo} ${element.data.Nombre}`;
              return element.data.Codigo === codigos.slice(0, index + 1).join('-');
            }
          );
        }
      });
    }
  }

  buildForm() {
    this.selectorForm = {
      controls: this.normaContable.slice(0, this.claseMinima).map((item, index) => {
        const control = this.createItemSelector(item);
        const formControl = new FormControl({value: this.formValue[item.key], disabled: !this.editable});
        if (index === 0) {
          (control as any).optionList.elements = () =>
            this.cuentasList.map((element) => ({
              ...element,
              Nombre: `${element.data.Codigo} ${element.data.Nombre}`,
            }));
        }
        this.form.addControl(control.key, formControl);
        return control;
      }),
    };
  }

  addControl() {
    const norma = this.normaContable[this.selectorForm.controls.length];
    if (norma) {
      const control = this.createItemSelector(norma);
      this.selectorForm = {
        controls: [
          ...this.selectorForm.controls,
          control
        ]
      };
      this.form.addControl(control.key, new FormControl(''));
      this.form.controls[norma.parent].valueChanges.subscribe((value) => {
        if (value) {
          this.form.get(norma.key).setValue('');
        }
      });
    }
  }

  deleteControl() {
    const norma = this.normaContable[this.selectorForm.controls.length - 1];
    if (norma && this.selectorForm.controls.length > this.claseMinima) {
      this.selectorForm.controls.pop();
      this.form.removeControl(norma.key);
    }
  }

  createItemSelector(item): (ReactiveFormGroup | ReactiveFormControl) {
    return {
      key: item.key,
      type: 'autocomplete',
      label: item.label,
      defaultValue: '',
      placeholder: item.label,
      validators: [CustomValidators.customRequired('Campo Requerido'), CustomValidators.customObject('Debe seleccionar un elemento')],
      optionList: {
        elements: (parent) =>
          parent &&
          parent.value[item.parent] &&
          parent.value[item.parent].children ?
          parent.value[item.parent].children.map(
            (element) => ({
              ...element,
              Nombre: `${element.data.Codigo} ${element.data.Nombre}`,
            })
          ) : [],
        labelKey: 'Nombre',
      },
      valueChanges: (parent) => {
        if (parent.get(item.child) && typeof parent.get(item.key).value !== 'object') parent.get(item.child).setValue('');
      }
    };
  }

}
