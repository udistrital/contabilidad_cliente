import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { fruits } from '../../layout/list/fruits-list';

@Component({
  selector: 'ngx-cuentas-contables',
  templateUrl: './cuentas-contables.component.html',
  styleUrls: ['./cuentas-contables.component.scss']
})
export class CuentasContablesComponent implements OnInit {
  fruits = fruits;
  @Input("selectionDebito")  selectionDebito: string ;
  @Input("selectionCredito") selectionCredito: string ;

  @Output() updateCuentaDebito  = new EventEmitter<string>();
  @Output() updateCuentaCredito = new EventEmitter<string>();
  @Output() guardarCuentas = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  updateCredito(cuenta) {
    this.selectionCredito  = cuenta;
    this.updateCuentaCredito.emit(this.selectionCredito);
  }
  updateDebito(cuenta) {
    this.selectionDebito   = cuenta;
    this.updateCuentaDebito.emit(this.selectionDebito);
  }
  enviarGuardado(){
    this.guardarCuentas.emit(true);
  }
}
