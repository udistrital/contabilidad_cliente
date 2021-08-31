import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroNominaHelper } from '../../../@core/helpers/registroNomina/registroNominaHelper';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  informacionGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registroNominaHelper: RegistroNominaHelper,
    private router: Router,
  ) {
    this.createForm();
    this.registroNominaHelper.back = 'consulta';
    this.registroNominaHelper.contabilizacion = 'consulta';
  }

  ngOnInit() {
  }

  createForm() {
    this.informacionGroup = this.fb.group({
      fecha: ['', Validators.required],
      vigencia: ['', Validators.required, ],
      mes: ['', Validators.required],
      tipoEmpleado: ['', Validators.required],
      tipoPago: ['', Validators.required],
      tipoComprobante: ['', Validators.required],
      documento: [''],
    });
  }

  esInvalido(nombre: string) {
    const input = this.informacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.informacionGroup.invalid) {
      return Object.values(this.informacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    if (this.informacionGroup.value.tipoComprobante === 'Desagregación Nómina') {
      this.router.navigate(['pages/registroNomina/desagregacion']);
    } else {
      this.router.navigate(['pages/registroNomina/contabilizacion']);
    }
  }
}
