import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-set-infoprovision',
  templateUrl: './set-infoprovision.component.html',
  styleUrls: ['./set-infoprovision.component.scss']
})
export class SetInfoprovisionComponent implements OnInit {

  infoProvisionGroup: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.infoProvisionGroup = this.fb.group({
      areaFuncional: ['', Validators.required],
      centroGestor: ['',Validators.required,],
      fecha: ['', Validators.required],

      tipoNomina: ['', Validators.required],
      mes: ['', Validators.required],
      conceptoNomina: ['', Validators.required],
      cuentaContable: ['',Validators.required,],
      valor: ['', Validators.required],
    });
  }



  esInvalido(nombre: string) {
    const input = this.infoProvisionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  saveForm() {
    if (this.infoProvisionGroup.invalid) {
      return Object.values(this.infoProvisionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}



