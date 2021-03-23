import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaConciliacionesComponent } from './tabla-conciliaciones/tabla-conciliaciones.component';
import { StepperConciliacionesComponent } from './stepper-conciliaciones/stepper-conciliaciones.component';
import { ContabilizacionComponent } from './contabilizacion/contabilizacion.component';
import { ConciliacionComponent } from './conciliacion/conciliacion.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';



const routes: Routes = [{
  path: 'lista',
  component: TablaConciliacionesComponent,
},
{
  path: 'crear',
  component: StepperConciliacionesComponent,
},
{
  path: 'conciliacion',
  component: ConciliacionComponent,
},
{
  path: 'contabilizacion',
  component: ContabilizacionComponent,
},
{
  path: '',
  redirectTo: 'lista',
  pathMatch: 'full'
},
{
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliacionesRoutingModule { }
