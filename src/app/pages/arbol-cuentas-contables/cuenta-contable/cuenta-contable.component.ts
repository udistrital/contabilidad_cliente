import { Component, OnInit } from '@angular/core';
import { myForm} from './form_nodo_cuenta_contable';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-cuenta-contable',
  templateUrl: './cuenta-contable.component.html',
  styleUrls: ['./cuenta-contable.component.scss']
})
export class CuentaContableComponent implements OnInit {

  dataForm = myForm;
  form = new FormGroup({});
  valueForm = {};

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.valueForm = { input: 'asdq' };
  }

  something() {
    this.form.markAllAsTouched();
  }

}
