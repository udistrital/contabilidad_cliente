import { Component, Inject, Input, OnInit } from '@angular/core';
import { FORM_NODO_CUENTA_CONTABLE, myForm} from './form_nodo_cuenta_contable';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-cuenta-contable',
  templateUrl: './cuenta-contable.component.html',
  styleUrls: ['./cuenta-contable.component.scss']
})
export class CuentaContableComponent implements OnInit {

  @Input() cuenta;

  dataForm = myForm;
  form = new FormGroup({});
  valueForm = {};
  nodeData: any;
  formData: any;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.valueForm = { input: 'asdq' };
    this.formData = FORM_NODO_CUENTA_CONTABLE;
  }

  something() {
    this.form.markAllAsTouched();
  }

  validarForm($event) {

  }

  validarCampo($event) {

  }




}
