import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaInformesComponent } from './lista-informes/lista-informes.component';
import { InformeComponent } from './informe/informe.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: 'lista',
  component: ListaInformesComponent,
},
{
  path: 'informe',
  component: InformeComponent,
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
export class InformesContablesRoutingModule { }
