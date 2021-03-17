import { Component, OnInit, ViewChild } from '@angular/core';

import { SetInformacionComponent } from '../set-informacion/set-informacion.component';
import { SetDocumentosComponent } from '../set-documentos/set-documentos.component';
import { SetComparacionComponent } from '../set-comparacion/set-comparacion.component';
import { SetConciliacionBancariaComponent } from '../set-conciliacion-bancaria/set-conciliacion-bancaria.component';

import { FormBuilder } from '@angular/forms';
import { ConciliacionesHelper } from '../../../@core/helpers/conciliaciones/conciliacionesHelper';


@Component({
  selector: 'ngx-stepper-conciliaciones',
  templateUrl: './stepper-conciliaciones.component.html',
  styleUrls: ['./stepper-conciliaciones.component.scss']
})
export class StepperConciliacionesComponent implements OnInit {
  @ViewChild(SetInformacionComponent, { static: false }) setInformacionComponent: SetInformacionComponent;
  @ViewChild(SetDocumentosComponent, { static: false }) setDocumentosComponent: SetDocumentosComponent;
  @ViewChild(SetComparacionComponent, { static: false }) setComparacionComponent: SetComparacionComponent;
  @ViewChild(SetConciliacionBancariaComponent, { static: false }) setConciliacionBancariaComponent: SetConciliacionBancariaComponent;

  constructor(private fb: FormBuilder, private conciliacionesHelper: ConciliacionesHelper) { }

  ngOnInit() {
    this.conciliacionesHelper.reiniciar();
  }

  get informacionGroup() {
    return this.setInformacionComponent ? this.setInformacionComponent.informacionConciliacionGroup : this.fb.group({});
  }

}
