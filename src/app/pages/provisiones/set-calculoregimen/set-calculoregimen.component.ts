import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DATOS_REGIMEN, CONFIGURACION_REGIMEN } from '../interfaces/interfaces';
import { ProvisionesHelper } from '../../../@core/helpers/provisiones/provisionesHelper'

@Component({
  selector: 'ngx-set-calculoregimen',
  templateUrl: './set-calculoregimen.component.html',
  styleUrls: ['./set-calculoregimen.component.scss']
})
export class SetCalculoregimenComponent implements OnInit {


  datosRegimen: any;
  configRegimen: any;


  regimenGroup: FormGroup;

  constructor(private fb: FormBuilder, public provisionesHelper: ProvisionesHelper) { 
    this.datosRegimen = DATOS_REGIMEN;
    this.configRegimen = CONFIGURACION_REGIMEN;
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.regimenGroup = this.fb.group({
      regimen: ['', Validators.required],

    });
  }

  get regimenInvalid() {
    return this.regimenGroup.get('regimen').invalid && this.regimenGroup.get('regimen').touched;
  }

  saveForm() {
    if (this.regimenGroup.invalid) {
      return Object.values(this.regimenGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
