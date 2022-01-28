import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
    Banco: [''],
    Ajustable: [false],
    Nmnc: [false],
    MonedaID: ['',  Validators.required],
  });

  constructor(private builder: FormBuilder,
    ) {}

  public getForm(): FormGroup {
    return this.formAcount;
  }

}
