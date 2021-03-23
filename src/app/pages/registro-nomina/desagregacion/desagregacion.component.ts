import { Component, OnInit } from '@angular/core';
import { RegistroNominaHelper } from '../../../@core/helpers/registroNomina/registroNominaHelper';


@Component({
  selector: 'ngx-desagregacion',
  templateUrl: './desagregacion.component.html',
  styleUrls: ['./desagregacion.component.scss']
})
export class DesagregacionComponent implements OnInit {

  configRegistro: any;
  datosRegistro: any;
  back: string;

  prueba = "Prueba"

  constructor(private registroNominaHelper: RegistroNominaHelper) { 
    this.configRegistro = this.registroNominaHelper.configDesagregacion;
    this.datosRegistro = this.registroNominaHelper.datosDesagregacion;
    this.back = this.registroNominaHelper.back;
  }

  ngOnInit() {

  }

}
