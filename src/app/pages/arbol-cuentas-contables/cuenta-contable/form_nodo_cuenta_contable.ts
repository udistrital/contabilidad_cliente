import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from '../../../@core/_custom-validators/custom-validators';

export class FormCuentaContable  {

  formAcount: FormGroup = this.builder.group({
    Codigo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    Activo: [true],
    Nombre: ['', Validators.required],
    NaturalezaCuentaID: ['', Validators.required],
    TipoCuentaID: ['', Validators.required],
    DetalleCuentaID: ['', Validators.required],
    CentroDecostosID: [''],
    RequiereTercero: [false],
    CuentaBancariaID: ['', [Validators.required, CustomValidators.customObject('Debe seleccionar un elemento')]],
    Ajustable: [false],
    Nmnc: [false],
    MonedaID: ['',  Validators.required],
    TipoRetencionID: ['', Validators.required],
  });

  constructor(private builder: FormBuilder,
    ) {}

  public getForm(): FormGroup {
    return this.formAcount;
  }

}
