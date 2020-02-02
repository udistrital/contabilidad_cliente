import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import { fruits } from '../../layout/list/fruits-list';

@Component({
  selector: 'ngx-cuentas-contables',
  templateUrl: './cuentas-contables.component.html',
  styleUrls: ['./cuentas-contables.component.scss'],
  animations: [
    trigger('changeSelectedValue',[
      state('initial', style({
        color: '#101426',
        fontSize:  '1.1rem'
      })),
      state('highlight', style({
        color: '#42A948',
        fontSize:  '1.15rem'
      })),
      transition('initial <=> highlight',animate('200ms'))
    ]),
  ]
})
export class CuentasContablesComponent implements OnInit {
  fruits = fruits;
  @Input("selectionDebito")  selectionDebito: string ;
  @Input("selectionCredito") selectionCredito: string ;

  @Output() updateCuentaDebito  = new EventEmitter<string>();
  @Output() updateCuentaCredito = new EventEmitter<string>();
  @Output() guardarCuentas = new EventEmitter<boolean>();

  stateHighlight: string = 'initial';
  animationCuenta: string;

  constructor() { }

  ngOnInit() {
  }

  triggerAnimationText(cuenta: string){
    if (cuenta == 'debito'  && this.animationCuenta === 'debito') {
      return 'highlight';
    }
    else if (cuenta == 'credito' && this.animationCuenta === 'credito') {
      return 'highlight';
    } else {
      return 'initial';
    }
  }

  updateCredito(cuenta) {
    this.selectionCredito  = cuenta;
    this.updateCuentaCredito.emit(this.selectionCredito);
    this.animationCuenta = 'credito';
    this.stateHighlight  = 'highlight';
  }

  updateDebito(cuenta) {
    this.selectionDebito   = cuenta;
    this.updateCuentaDebito.emit(this.selectionDebito);
    this.animationCuenta = 'debito';
    this.stateHighlight  = 'highlight';
  }

  restaurarAnimationInitial( event ){
    this.stateHighlight = 'initial';
  }

  enviarGuardado(){
    this.guardarCuentas.emit(true);
  }
}
