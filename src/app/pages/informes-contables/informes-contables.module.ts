import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MatDividerModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { SharedModule } from '../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material';


import { InformesContablesRoutingModule } from './informes-contables-routing.module';
import { ListaInformesComponent } from './lista-informes/lista-informes.component';
import { InformeComponent } from './informe/informe.component';


@NgModule({
  declarations: [
  ListaInformesComponent,
  InformeComponent
],
  imports: [
    CommonModule,
    InformesContablesRoutingModule,
    MiscellaneousModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    MatDividerModule,
    MatPaginatorModule,
    MatMenuModule,
  ]
})
export class InformesContablesModule { }
