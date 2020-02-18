import { Component, OnInit, ChangeDetectorRef, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { ConceptoHelper } from '../../../@core/helpers/concepto/conceptoHelper';
import { ConceptosService } from '../../../@core/managers/conceptos.service';

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

  @ViewChild('inputEditConceptName',{static:false}) inputEditConceptName: ElementRef;

  nombreConcepto: any;
  numeroCuentaCredito: string = 'N/A'; //TODO: traducir
  numeroCuentaDebito:  string = 'N/A'; //TODO: traducir
  wizzardSteps:        boolean = false;

  editModalConceptoForm :   FormGroup;
  conceptoEditado = <any>{ 'Nombre':'','CuentaCredito':'','CuentaDebito':'', 'Contexto': 'no se ha definido', 'MovimientoID': 'fake-movimiento' };

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private dialogRef: NbDialogRef<EditModalComponent>,
    private conceptoHelper: ConceptoHelper,
    private conceptoService: ConceptosService ) { }

  ngOnInit() {
    this.nombreConcepto      = this.nombre;
    this.numeroCuentaCredito = this.cuentaCredito;
    this.numeroCuentaDebito  = this.cuentaDebito;

    this.editModalConceptoForm = this.fb.group({
      nombreConcepto:      new FormControl('',[Validators.required,Validators.minLength(4)]),
      numeroCuentaCredito: new FormControl(this.numeroCuentaCredito),
      numeroCuentaDebito:  new FormControl(this.numeroCuentaDebito)
    });
  }

  cierraVentana() {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    this.inputEditConceptName.nativeElement.value = this.nombreConcepto;
    this.cd.detectChanges();
  }

  updateCuentaCredito(newCuenta: string) {
    this.numeroCuentaCredito = newCuenta;
  }

  updateCuentaDebito(newCuenta: string) {
    this.numeroCuentaDebito = newCuenta;
  }

  updateResumen(){
    this.conceptoEditado.Nombre        = this.inputEditConceptName.nativeElement.value;
    this.conceptoEditado.CuentaDebito  = this.numeroCuentaDebito;
    this.conceptoEditado.CuentaCredito = this.numeroCuentaCredito;
  }

  editarConcepto() {
    this.updateResumen();
    this.conceptoHelper.conceptoUpdate(this.conceptoEditado,this.id).subscribe( res => {
      this.cierraVentana();
      this.conceptoService.updateEvent('update-list');
    });
  }
}
