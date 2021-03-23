import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperModule, MatDividerModule, MatTabsModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { SharedModule } from '../../shared/shared.module';

import { ConciliacionesRoutingModule } from './conciliaciones-routing.module';
import { TablaConciliacionesComponent } from './tabla-conciliaciones/tabla-conciliaciones.component';
import { StepperConciliacionesComponent } from './stepper-conciliaciones/stepper-conciliaciones.component';
import { SetInformacionComponent } from './set-informacion/set-informacion.component';
import { SetDocumentosComponent } from './set-documentos/set-documentos.component';
import { SetComparacionComponent } from './set-comparacion/set-comparacion.component';
import { SetConciliacionBancariaComponent } from './set-conciliacion-bancaria/set-conciliacion-bancaria.component';
import { ConciliacionComponent } from './conciliacion/conciliacion.component';
import { ContabilizacionComponent } from './contabilizacion/contabilizacion.component';


@NgModule({
  declarations: [
    TablaConciliacionesComponent, 
    StepperConciliacionesComponent, 
    SetInformacionComponent, 
    SetDocumentosComponent, 
    SetComparacionComponent, 
    SetConciliacionBancariaComponent, ConciliacionComponent, ContabilizacionComponent],
  imports: [
    CommonModule,
    ConciliacionesRoutingModule,
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
export class ConciliacionesModule { }
