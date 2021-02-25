import { Component, OnInit } from '@angular/core';
import { CONFIGURACION_LISTA_PROVISION, DATOS_LISTA_PROVISION } from '../interfaces/interfaces';

@Component({
  selector: 'ngx-tabla-provisiones',
  templateUrl: './tabla-provisiones.component.html',
  styleUrls: ['./tabla-provisiones.component.scss']
})
export class TablaProvisionesComponent implements OnInit {

  configProvisiones: any;
  datosProvisiones: any;

  constructor() { 
    this.datosProvisiones = DATOS_LISTA_PROVISION;
    this.configProvisiones = CONFIGURACION_LISTA_PROVISION;
  }

  ngOnInit() {
  }

}
