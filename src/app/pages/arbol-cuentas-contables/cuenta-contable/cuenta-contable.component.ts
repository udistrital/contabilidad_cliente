import { SelectorContableComponent } from './../selector-contable/selector-contable.component';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormCuentaContable} from './form_nodo_cuenta_contable';
import { FormBuilder, FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectAllNaturalezas } from '../../../@core/_store/selectors';
import { ArbolHelper } from '../../../@core/helpers/arbol/arbolHelper';

@Component({
  selector: 'ngx-cuenta-contable',
  templateUrl: './cuenta-contable.component.html',
  styleUrls: ['./cuenta-contable.component.scss']
})
export class CuentaContableComponent implements OnInit {

  @Input() cuenta;

  @ViewChild(SelectorContableComponent, { static: false})
  private selectorContable!: SelectorContableComponent;

  formCuenta = new FormCuentaContable(this.builder);
  form: FormGroup = this.formCuenta.getForm();
  prefix: string;
  naturalezas = [];
  detalleCuentas = [];
  tipoMonedas = [];
  centroCostos = [];
  tipoCuentas = [{Id: 'activos', Label: 'Activos'}];

  constructor(private builder: FormBuilder,
    private acountService: ArbolHelper
    ) {}

  ngOnInit() {
    this.buildData();
    this.loadParams();
  }

  private loadParams() {
    forkJoin([
      this.acountService.getNaturalezaCuenta(),
      this.acountService.getDetalleCuenta(),
      this.acountService.getTipoMoneda(),
      this.acountService.getCentroCostos()
    ]).subscribe(results => {
      this.naturalezas = results[0];
      this.detalleCuentas = results[1];
      this.tipoMonedas = results[2];
      this.centroCostos = results[3];
    });
  }

  private buildData() {
    if (this.cuenta) {
      const codes = this.cuenta.Codigo.split('-');
      const code = codes.pop();
      this.prefix = `${codes.join('-')}`;
      this.acountService.getInfoCuenta(this.cuenta.Codigo).subscribe(res => {
        this.form.patchValue({...res, Codigo: code});
      });
    }
  }

  something() {
  }

  setSelectedCount(account) {
    console.log(account);
    if (account && account.data) {
      const data = account.data;
      this.prefix = data.Codigo;
    }
  }

  addNode() {

  }

  updateNode() {

  }

  validateSelector($event) {
    console.log($event);
  }

  onSubmit() {
    if (this.form.valid && this.selectorContable.form.valid) {
      // this.acountService.updateNode(this.form.value.Codigo, this.form.value);
      const code =  this.prefix + '-' + this.form.value.Codigo;
      const newAccount = {
        ...this.form.value,
        Nivel: code.split('-').length,
        Padre: this.prefix,
      };
      this.acountService.addNode(newAccount).subscribe(res => {
        console.log(res);
      });
    } else {
      this.form.markAllAsTouched();
      this.selectorContable.form.markAllAsTouched();
    }
    console.log(this.form.value, this.selectorContable);
  }

}
