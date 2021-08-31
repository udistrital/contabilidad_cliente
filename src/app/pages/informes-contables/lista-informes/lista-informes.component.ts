import { Component, OnInit } from '@angular/core';
import { INFORMES_UNIVERSIDAD, CONTADURIA_GENERAL, CONTRALORIA_DISTRITAL, SECRETARIA_HACIENDA, MINISTERIO_EDUCACIÓN, ANEXOS } from '../interfaces/interfaces';
import { InformesContablesHelper } from '../../../@core/helpers/informesContables/informesContablesHelper';

@Component({
  selector: 'ngx-lista-informes',
  templateUrl: './lista-informes.component.html',
  styleUrls: ['./lista-informes.component.scss']
})
export class ListaInformesComponent implements OnInit {

  informesUniversidad: string[];
  contraloria: string[];
  contaduria: string[];
  hacienda: string[];
  ministerio: string[];
  anexos: string[];

  constructor(private informesContablesHelper: InformesContablesHelper, ) {
    this.informesUniversidad = INFORMES_UNIVERSIDAD;
    this.contraloria = CONTRALORIA_DISTRITAL;
    this.contaduria = CONTADURIA_GENERAL;
    this.hacienda = SECRETARIA_HACIENDA;
    this.ministerio = MINISTERIO_EDUCACIÓN;
    this.anexos = ANEXOS;
   }

  ngOnInit() {

  }

  TipoInforme(informe) {
    this.informesContablesHelper.TipoInforme(informe);
  }
}
