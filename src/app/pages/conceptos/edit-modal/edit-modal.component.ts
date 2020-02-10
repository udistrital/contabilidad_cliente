import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  @Input('context') context : any;
  //@Output() triggerCloseModal  = new EventEmitter<boolean>();

  numeroCuentaCredito: string = 'N/A';
  numeroCuentaDebito:  string = 'N/A';
  wizzardSteps: boolean = false;

  constructor(
    private cd: ChangeDetectorRef,
    private dialogRef: NbDialogRef<EditModalComponent> ) { }

  ngOnInit() {
    console.log(this.context);
  }

  cierraVentana() {
    this.dialogRef.close();
  }

  submit(name) {
    // this.dialogRef.close(name);
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
