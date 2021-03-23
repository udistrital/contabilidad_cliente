import { Component, OnInit } from '@angular/core';
import { ConciliacionesHelper } from '../../../@core/helpers/conciliaciones/conciliacionesHelper';

@Component({
  selector: 'ngx-set-comparacion',
  templateUrl: './set-comparacion.component.html',
  styleUrls: ['./set-comparacion.component.scss']
})
export class SetComparacionComponent implements OnInit {


  prueba = "Prueba";

  configtabla: any;
  datosNDLibros: any;
  datosNCLibros: any;
  datosNDExtracto: any;
  datosNCExtracto: any;


  tabsTitles: string[] = ["ND NO REG LIBROS","NC NO REG LIBROS","ND NO REG EXT","NC NO REG EXT"];
  titles: string[] = [
          "Notas débito no registradas en libros",
          "Notas crédito no registradas en libros",
          "Notas debito no registradas en extracto",
          "Notas crédito no registradas en extractos"];

  constructor(
    public conciliacionesHelper: ConciliacionesHelper) { 

      this.configtabla = this.conciliacionesHelper.configTablaComparacion;
      this.datosNDLibros = this.conciliacionesHelper.datosNDLibros;
      this.datosNCLibros = this.conciliacionesHelper.datosNCLibros;
      this.datosNDExtracto = this.conciliacionesHelper.datosNDExtracto;
      this.datosNCExtracto = this.conciliacionesHelper.datosNCExtracto;
    }

  ngOnInit() {
  }

  onChange(itemSelected) {
  }

  onTabChanged($event) {
  }

}
