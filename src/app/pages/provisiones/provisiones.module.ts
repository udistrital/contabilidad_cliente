import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperModule, MatDividerModule, MatTabsModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ProvisionesRoutingModule } from './provisiones-routing.module';
import { TablaProvisionesComponent } from './tabla-provisiones/tabla-provisiones.component';
import { StepperProvisionesComponent } from './stepper-provisiones/stepper-provisiones.component'
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { SharedModule } from '../../shared/shared.module';
import { SetInfoprovisionComponent } from './set-infoprovision/set-infoprovision.component';
import { SetConceptoprovisionComponent } from './set-conceptoprovision/set-conceptoprovision.component';
import { SetResumenprovisionComponent } from './set-resumenprovision/set-resumenprovision.component';
import { SetCalculoregimenComponent } from './set-calculoregimen/set-calculoregimen.component';
import { SetContabilizacionComponent } from './set-contabilizacion/set-contabilizacion.component';


@NgModule({
  declarations: [
    TablaProvisionesComponent, 
    StepperProvisionesComponent, 
    SetInfoprovisionComponent, 
    SetConceptoprovisionComponent, 
    SetResumenprovisionComponent, 
    SetCalculoregimenComponent, 
    SetContabilizacionComponent,
  ],
  imports: [
    CommonModule,
    ProvisionesRoutingModule,
    MiscellaneousModule,
    SharedModule,
    MatStepperModule, 
    MatDividerModule,
    MatTabsModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    CurrencyMaskModule
  ]
})
export class ProvisionesModule { }
