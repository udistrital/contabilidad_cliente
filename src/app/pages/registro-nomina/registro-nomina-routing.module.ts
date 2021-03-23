import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaRegistroNominaComponent } from './tabla-registro-nomina/tabla-registro-nomina.component';
import { ContabilizacionComponent } from './contabilizacion/contabilizacion.component';
import { DesagregacionComponent } from './desagregacion/desagregacion.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';



const routes: Routes = [{
  path: 'lista',
  component: TablaRegistroNominaComponent,
},
{
  path: 'consultar',
  component: ConsultaComponent,
},
{
  path: 'desagregacion',
  component: DesagregacionComponent,
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
export class RegistroNominaRoutingModule { }
