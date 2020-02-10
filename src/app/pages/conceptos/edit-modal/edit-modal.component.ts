import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  numeroCuentaCredito: string = 'N/A';
  numeroCuentaDebito:  string = 'N/A';
  wizzardSteps: boolean = false;

  constructor( private cd: ChangeDetectorRef) { }
  //, private dialogRef: NbDialogRef<EditModalComponent>
  ngOnInit() {
  }

  cancel() {
    // this.dialogRef.close();
  }

  submit(name) {
    // this.dialogRef.close(name);
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  updateCuentaCredito(newCuenta: string) {
    this.numeroCuentaCredito = newCuenta;
    //this.addWizardForm.value.numeroCuentaCredito = this.numeroCuentaCredito;
  }

  updateCuentaDebito(newCuenta: string) {
    this.numeroCuentaDebito = newCuenta;
    //this.addWizardForm.value.numeroCuentaDebito = this.numeroCuentaDebito;
  }

  updateResumenaqi(){
    console.log('hey hey!');
  }
}
