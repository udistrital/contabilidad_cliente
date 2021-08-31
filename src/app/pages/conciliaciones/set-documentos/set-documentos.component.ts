import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConciliacionesHelper } from '../../../@core/helpers/conciliaciones/conciliacionesHelper';


@Component({
  selector: 'ngx-set-documentos',
  templateUrl: './set-documentos.component.html',
  styleUrls: ['./set-documentos.component.scss']
})
export class SetDocumentosComponent implements OnInit {

  datosExtracto: any;
  configExtracto: any;

  datosMovContable: any;
  configMovContable: any;

  datosEstadoPago: any;
  configEstadoPago: any;

  documentosGroup: FormGroup;
  tabsTitles: string[] = ['EXTRACTO', 'MOVIMIENTO CONTABLE', 'ESTADO DE PAGO'];

  constructor(
    private fb: FormBuilder,
    public conciliacionesHelper: ConciliacionesHelper) {

      this.datosExtracto = this.conciliacionesHelper.tablaExtracto;
      this.configExtracto = this.conciliacionesHelper.configExtracto;
      this.datosMovContable = this.conciliacionesHelper.tablaMovContable;
      this.configMovContable = this.conciliacionesHelper.configMovContable;
      this.datosEstadoPago = this.conciliacionesHelper.tablaEstadoPago;
      this.configEstadoPago = this.conciliacionesHelper.configEstadoPago;
      this.createForm();
    }

  ngOnInit() {
  }

  createForm() {
    this.documentosGroup = this.fb.group({
      tipoComporbante: ['', Validators.required],
      numeroComprobante: ['', Validators.required],
    });
  }

  onChange(itemSelected) {
  }

  onTabChanged($event) {
  }

  saveForm() {
    if (this.documentosGroup.invalid) {
      return Object.values(this.documentosGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
