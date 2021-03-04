import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvisionesHelper } from '../../../@core/helpers/provisiones/provisionesHelper'

@Component({
  selector: 'ngx-set-infoprovision',
  templateUrl: './set-infoprovision.component.html',
  styleUrls: ['./set-infoprovision.component.scss']
})
export class SetInfoprovisionComponent implements OnInit {

  infoProvisionGroup: FormGroup;
  precio = 5;
  // precio = 789655710.00;

  constructor(private fb: FormBuilder, private provisionHelper : ProvisionesHelper) { 
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
    
    this.provisionHelper.nuevaProvision = this.infoProvisionGroup.value;
    this.provisionHelper.nuevaProvision.valorProvision = this.precio;
    console.log(this.provisionHelper.nuevaProvision)
    this.provisionHelper.tipoNomina = this.infoProvisionGroup.value.tipoNomina;
    if (this.infoProvisionGroup.invalid) {
      return Object.values(this.infoProvisionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    this.createForm();
  }

}



