import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class FormCuentaContable  {

  formAcount: FormGroup = this.builder.group({
    Codigo: ['', Validators.required],
    Activo: [true, Validators.required],
    Nombre: ['', Validators.required],
    NaturalezaCuentaID: ['', Validators.required],
    TipoCuenta: ['', Validators.required],
    DetalleCuentaID: ['', Validators.required],
    TieneCentroCostos: [false, Validators.required],
    CentroDecostosID: ['', Validators.required],
    RequiereTercero: [false, Validators.required],
    Tercero: ['', Validators.required],
    RequiereBanco: [false, Validators.required],
    Banco: ['', Validators.required],
    Ajustable: [false, Validators.required],
    Nmnc: [false, Validators.required],
    MonedaID: ['',  Validators.required],
  });

  constructor(private builder: FormBuilder,
    ) {}

  public getForm(): FormGroup {
    return this.formAcount;
  }

}
