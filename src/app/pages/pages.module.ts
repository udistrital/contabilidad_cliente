import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import {
  NbTreeGridModule,
  NbSelectModule,
  NbAlertModule,
  NbTabsetModule,
  NbStepperModule,
  NbCardModule,
  NbTooltipModule,
  NbRadioModule,
  NbCheckboxModule,
  NbButtonModule,
  NbInputModule,
  NbListModule,
  NbDialogModule,
  NbBadgeModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { MatStepperModule } from '@angular/material';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ConfiguracionService } from '../@core/data/configuracion.service';
import { MenuService } from '../@core/data/menu.service';
import { SharedModule } from '../shared/shared.module';
import { NbIconModule } from '@nebular/theme';
import { PlanCuentasModule } from './plan-cuentas/plan-cuentas.module';
import { ListTipoComprobanteComponent } from './comprobantes/list-tipo-comprobante/list-tipo-comprobante.component';
import { ListComprobanteComponent } from './comprobantes/list-comprobante/list-comprobante.component';
import { ParametrosComprobanteComponent } from './comprobantes/parametros-comprobante/parametros-comprobante.component';
import { ArbolCuentasContablesComponent, FsIconAComponent } from './arbol-cuentas-contables/arbol-cuentas-contables.component';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { WizardComponent } from './conceptos/wizard/wizard.component';
import { CuentasContablesComponent } from './conceptos/cuentas-contables/cuentas-contables.component';
import { ListConceptosComponent } from './conceptos/list-conceptos/list-conceptos.component';
import { EditModalComponent } from './conceptos/edit-modal/edit-modal.component';


const MODULES = [
  PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbButtonModule,
    NbIconModule,
    DashboardModule,
    SharedModule,
    ECommerceModule,
    MiscellaneousModule,
    PlanCuentasModule,
    ThemeModule,
    SharedModule,
    CommonModule,
    NbTreeGridModule,
    NbTooltipModule,
    NbSelectModule,
    NbRadioModule,
    NbAlertModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbStepperModule,
    NbCardModule,
    Ng2SmartTableModule,
    ToasterModule,
    MatStepperModule,
    CurrencyMaskModule,
    NbInputModule,
    NbListModule,
    NbBadgeModule,
    NbDialogModule.forRoot(),
];
const COMPONENTS = [
    PagesComponent,
    ListTipoComprobanteComponent,
    ListComprobanteComponent,
    ParametrosComprobanteComponent,
    ArbolCuentasContablesComponent,
    FsIconAComponent,
    ConceptosComponent,
    WizardComponent,
    CuentasContablesComponent,
    ListConceptosComponent,
    EditModalComponent,
];
const ENTRY_COMPONENTS = [
    ListTipoComprobanteComponent,
    ListComprobanteComponent,
    CuentasContablesComponent,
    EditModalComponent
];
const SERVICES = [
    ConfiguracionService,
    MenuService,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class PagesModule {
}
