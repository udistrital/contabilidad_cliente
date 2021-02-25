import { Component, OnInit, ViewChild } from '@angular/core';
import { SetCalculoregimenComponent } from '../set-calculoregimen/set-calculoregimen.component'
import { SetConceptoprovisionComponent } from '../set-conceptoprovision/set-conceptoprovision.component'
import { SetContabilizacionComponent } from '../set-contabilizacion/set-contabilizacion.component'
import { SetInfoprovisionComponent } from '../set-infoprovision/set-infoprovision.component'
import { SetResumenprovisionComponent } from '../set-resumenprovision/set-resumenprovision.component'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-stepper-provisiones',
  templateUrl: './stepper-provisiones.component.html',
  styleUrls: ['./stepper-provisiones.component.scss']
})
export class StepperProvisionesComponent implements OnInit {
  @ViewChild(SetCalculoregimenComponent, { static: false }) setCalculoregimenComponent: SetCalculoregimenComponent;
  @ViewChild(SetConceptoprovisionComponent, { static: false }) setConceptoprovisionComponent: SetConceptoprovisionComponent;
  @ViewChild(SetContabilizacionComponent, { static: false }) setContabilizacionComponent: SetContabilizacionComponent;
  @ViewChild(SetInfoprovisionComponent, { static: false }) setInfoprovisionComponent: SetInfoprovisionComponent;
  @ViewChild(SetResumenprovisionComponent, { static: false }) setResumenprovisionComponent: SetResumenprovisionComponent;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  // get calculoRegimenGroup() {
  //   return this.setCalculoregimenComponent ? this.setCalculoregimenComponent.infoReintegroGroup : this.fb.group({});
  // }
  // get conceptoProvisionGroup() {
  //   return this.setConceptoprovisionComponent ? this.setConceptoprovisionComponent.infoAfectacionGroup : this.fb.group({});
  // }
  // get contabilizacionGroup() {
  //   return this.setContabilizacionComponent ? this.setContabilizacionComponent.contabilizacionGroup : this.fb.group({});
  // }
  // get infoProvisionGroup() {
  //   return this.setInfoprovisionComponent ? this.setInfoprovisionComponent.detalleReintegroGroup : this.fb.group({});
  // }
  // get resumenProvisionGroup() {
  //   return this.setResumenprovisionComponent ? this.setResumenprovisionComponent.detalleReintegroGroup : this.fb.group({});
  // }

}
