import { Component, OnInit } from '@angular/core';
import { ConciliacionesHelper } from '../../../@core/helpers/conciliaciones/conciliacionesHelper';

@Component({
  selector: 'ngx-conciliacion',
  templateUrl: './conciliacion.component.html',
  styleUrls: ['./conciliacion.component.scss']
})
export class ConciliacionComponent implements OnInit {

  configConciliaciones: any;
  datosConciliaciones: any;

  constructor( private conciliacionesHelper: ConciliacionesHelper ) {
    this.configConciliaciones = this.conciliacionesHelper.configConciliacion;
    this.datosConciliaciones = this.conciliacionesHelper.datosConciliacion;
   }

  ngOnInit() {
  }

}
