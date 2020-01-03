import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { ListTipoComprobanteComponent } from "./comprobantes/list-tipo-comprobante/list-tipo-comprobante.component";
import { ListComprobanteComponent } from "./comprobantes/list-comprobante/list-comprobante.component";

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
