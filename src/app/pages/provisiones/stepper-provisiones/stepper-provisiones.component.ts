import { Component, OnInit, ViewChild } from '@angular/core';
import { SetCalculoregimenComponent } from '../set-calculoregimen/set-calculoregimen.component'
import { SetConceptoprovisionComponent } from '../set-conceptoprovision/set-conceptoprovision.component'
import { SetContabilizacionComponent } from '../set-contabilizacion/set-contabilizacion.component'
import { SetInfoprovisionComponent } from '../set-infoprovision/set-infoprovision.component'
import { SetResumenprovisionComponent } from '../set-resumenprovision/set-resumenprovision.component'
import {MatStep, MatStepper} from '@angular/material/stepper';
import { FormBuilder } from '@angular/forms';
import { ProvisionesHelper } from '../../../@core/helpers/provisiones/provisionesHelper'

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
  @ViewChild('stepper' ,{ static: false }) stepper: MatStepper;
 


  constructor(private fb: FormBuilder, private provisionHelper: ProvisionesHelper) { }


  ngOnInit() {
    this.provisionHelper.reiniciar();
  }
  get regimenGroup() {
    return this.setCalculoregimenComponent ? this.setCalculoregimenComponent.regimenGroup : this.fb.group({});
  }
  get conceptosProvisionGroup() {
    return this.setConceptoprovisionComponent ? this.setConceptoprovisionComponent.conceptosProvisionGroup : this.fb.group({});
  }
  get contabilizacionGroup() {
    return this.setContabilizacionComponent ? this.setContabilizacionComponent.contabilizacionGroup : this.fb.group({});
  }
  get infoProvisionGroup() {
    return this.setInfoprovisionComponent ? this.setInfoprovisionComponent.infoProvisionGroup : this.fb.group({});
  }

  nextClick(index : any): void {
    this.setInfoprovisionComponent.infoProvisionGroup.reset();
    this.setInfoprovisionComponent.createForm()
    this.setConceptoprovisionComponent.conceptosProvisionGroup.reset();
    this.setConceptoprovisionComponent.createForm()
    this.stepper.linear = false;
    this.stepper.selectedIndex = index;
    setTimeout(() => {
       this.stepper.linear = true;
    });
}

}
