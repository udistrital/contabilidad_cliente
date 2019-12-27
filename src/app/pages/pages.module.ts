import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

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



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule,
    DashboardModule,
    SharedModule,
    ECommerceModule,
    MiscellaneousModule,
    PlanCuentasModule,
  ],
  declarations: [
    PagesComponent,
    ListTipoComprobanteComponent,
    ListComprobanteComponent,
  ],
  providers: [
    ConfiguracionService,
    MenuService,
  ],
})
export class PagesModule {
}
