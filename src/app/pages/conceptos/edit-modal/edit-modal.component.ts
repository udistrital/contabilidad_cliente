import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  @Input('id') id                       : string;
  @Input('nombre') nombre               : string;
  @Input('cuentaCredito') cuentaCredito : string;
  @Input('cuentaDebito') cuentaDebito   : string;

  numeroCuentaCredito: string = 'N/A'; //TODO: traducir
  numeroCuentaDebito:  string = 'N/A'; //TODO: traducir
  wizzardSteps: boolean = false;

  constructor(
    private cd: ChangeDetectorRef,
    private dialogRef: NbDialogRef<EditModalComponent> ) { }

  ngOnInit() {
    this.numeroCuentaCredito = this.cuentaCredito;
    this.numeroCuentaDebito  = this.cuentaDebito;
    console.log(this.id,this.nombre,this.cuentaCredito,this.cuentaDebito);
  }

  cierraVentana() {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  updateCuentaCredito(newCuenta: string) {
    this.numeroCuentaCredito = newCuenta;
  }

  updateCuentaDebito(newCuenta: string) {
    this.numeroCuentaDebito = newCuenta;
  }

  updateResumen(){
    console.log('hey hey!');
  }
}
