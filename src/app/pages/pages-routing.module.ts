import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { ListTipoComprobanteComponent } from "./comprobantes/list-tipo-comprobante/list-tipo-comprobante.component";
import { ListComprobanteComponent } from "./comprobantes/list-comprobante/list-comprobante.component";
import { ArbolCuentasContablesComponent } from './arbol-cuentas-contables/arbol-cuentas-contables.component';
import { ConceptosComponent } from './conceptos/conceptos.component';


const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "tipos_comprobante",
        component: ListTipoComprobanteComponent
      },
      {
        path: "comprobantes",
        component: ListComprobanteComponent
      },
      {
        path: "",
        redirectTo: "tipos_comprobante",
        pathMatch: "full"
      },
      {
        path: "arbol_cuentas_contables",
        component: ArbolCuentasContablesComponent
      },
      {
        path: "conceptos",
        component: ConceptosComponent
      },
      {
        path: 'provisiones',
        loadChildren: () => import('./provisiones/provisiones.module')
        .then(m => m.ProvisionesModule),
      },
      {
        path: "**",
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
