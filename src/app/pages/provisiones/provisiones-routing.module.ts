import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaProvisionesComponent } from './tabla-provisiones/tabla-provisiones.component';
import { StepperProvisionesComponent } from './stepper-provisiones/stepper-provisiones.component';
import { NotFoundComponent } from "../miscellaneous/not-found/not-found.component";

const routes: Routes = [{
  path: 'lista',
  component: TablaProvisionesComponent,
},
{
  path: 'crear',
  component: StepperProvisionesComponent,
},
{
  path: "",
  redirectTo: "lista",
  pathMatch: "full"
},
{
  path: "**",
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvisionesRoutingModule { }
