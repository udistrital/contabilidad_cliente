import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DATOS_CONCEPTOS, CONFIGURACION_CONCEPTOS } from '../interfaces/interfaces';

@Component({
  selector: 'ngx-set-conceptoprovision',
  templateUrl: './set-conceptoprovision.component.html',
  styleUrls: ['./set-conceptoprovision.component.scss']
})
export class SetConceptoprovisionComponent implements OnInit {


  datosConceptos: any;
  configConceptos: any;


  conceptosProvisionGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.datosConceptos = DATOS_CONCEPTOS;
    this.configConceptos = CONFIGURACION_CONCEPTOS;
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.conceptosProvisionGroup = this.fb.group({
      conceptos: ['', Validators.required],

    });
  }

  get conceptosInvalid() {
    return this.conceptosProvisionGroup.get('conceptos').invalid && this.conceptosProvisionGroup.get('conceptos').touched;
  }

  saveForm() {
    if (this.conceptosProvisionGroup.invalid) {
      return Object.values(this.conceptosProvisionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }



}
