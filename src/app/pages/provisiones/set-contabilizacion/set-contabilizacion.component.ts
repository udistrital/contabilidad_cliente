import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIGURACION_CONTABILIZACION, DATOS_CONTABILIZACION } from '../interfaces/interfaces';

@Component({
  selector: 'ngx-set-contabilizacion',
  templateUrl: './set-contabilizacion.component.html',
  styleUrls: ['./set-contabilizacion.component.scss']
})
export class SetContabilizacionComponent implements OnInit {

  contabilizacionGroup: FormGroup;
  configContabilizacion: any;
  datosContabilizacion: any;

  constructor(private fb: FormBuilder) { 
    this.datosContabilizacion = DATOS_CONTABILIZACION;
    this.configContabilizacion = CONFIGURACION_CONTABILIZACION;
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.contabilizacionGroup = this.fb.group({
      numeroComprobante: ['', Validators.required],
      tipoComprobante: ['',Validators.required,],
      consecutivo: ['', Validators.required],
      concepto: ['', Validators.required],
    });
  }



  esInvalido(nombre: string) {
    const input = this.contabilizacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.contabilizacionGroup.invalid) {
      return Object.values(this.contabilizacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
