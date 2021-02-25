import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DATOS_REGIMEN, CONFIGURACION_REGIMEN } from '../interfaces/interfaces';

@Component({
  selector: 'ngx-set-calculoregimen',
  templateUrl: './set-calculoregimen.component.html',
  styleUrls: ['./set-calculoregimen.component.scss']
})
export class SetCalculoregimenComponent implements OnInit {


  datosRegimen: any;
  configRegimen: any;


  regimenGroup: FormGroup;

  constructor(private fb: FormBuilder) { 
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
