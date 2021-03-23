import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MatDividerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { SharedModule } from '../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material';

import { RegistroNominaRoutingModule } from './registro-nomina-routing.module';
import { TablaRegistroNominaComponent } from './tabla-registro-nomina/tabla-registro-nomina.component';
import { ContabilizacionComponent } from './contabilizacion/contabilizacion.component';
import { DesagregacionComponent } from './desagregacion/desagregacion.component';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [
    TablaRegistroNominaComponent, 
    ContabilizacionComponent, 
    DesagregacionComponent, 
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    RegistroNominaRoutingModule,
    MiscellaneousModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    MatDividerModule,
    MatPaginatorModule
  ]
})
export class RegistroNominaModule { }
