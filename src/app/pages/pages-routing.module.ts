import { HomeComponent } from './miscellaneous/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ListTipoComprobanteComponent } from './comprobantes/list-tipo-comprobante/list-tipo-comprobante.component';
import { ListComprobanteComponent } from './comprobantes/list-comprobante/list-comprobante.component';
import { ArbolCuentasContablesComponent } from './arbol-cuentas-contables/arbol-cuentas-contables.component';
import { ConceptosComponent } from './conceptos/conceptos.component';
import { ArbolContableComponent } from './arbol-cuentas-contables/arbol-contable/arbol-contable.component';
import { CuentasResolver } from '../@core/_resolver/entities.resolver';
import { AuthGuard } from '../@core/_guards/auth.guard';

export const entityResolvers = [CuentasResolver];

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'tipos_comprobante',
        component: ListTipoComprobanteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'comprobantes',
        component: ListComprobanteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'arbol_cuentas_contables',
        component: ArbolCuentasContablesComponent,
        canActivate: [AuthGuard],
        resolve: {
          cuentas: CuentasResolver
        }
      },
      {
        path: 'arbol-contable',
        component: ArbolContableComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'conceptos',
        component: ConceptosComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'provisiones',
        canActivate: [AuthGuard],
        loadChildren: () => import('./provisiones/provisiones.module')
        .then(m => m.ProvisionesModule),
      },
      {
        path: 'conciliaciones',
        canActivate: [AuthGuard],
        loadChildren: () => import('./conciliaciones/conciliaciones.module')
        .then(m => m.ConciliacionesModule),
      },
      {
        path: 'registroNomina',
        canActivate: [AuthGuard],
        loadChildren: () => import('./registro-nomina/registro-nomina.module')
        .then(m => m.RegistroNominaModule),
      },
      {
        path: 'informesContables',
        canActivate: [AuthGuard],
        loadChildren: () => import('./informes-contables/informes-contables.module')
        .then(m => m.InformesContablesModule),
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

export const routedComponents = [
  ListTipoComprobanteComponent,
  ListComprobanteComponent
];
