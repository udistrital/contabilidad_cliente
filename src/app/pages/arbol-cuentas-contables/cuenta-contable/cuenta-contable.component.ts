import { SelectorContableComponent } from './../selector-contable/selector-contable.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormCuentaContable} from './form_nodo_cuenta_contable';
import { FormBuilder, FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ArbolHelper } from '../../../@core/helpers/arbol/arbolHelper';
import { PopUpManager } from '../../../@core/managers/popUpManager';

@Component({
  selector: 'ngx-cuenta-contable',
  templateUrl: './cuenta-contable.component.html',
  styleUrls: ['./cuenta-contable.component.scss']
})
export class CuentaContableComponent implements OnInit {

  @Input() cuenta;

  @ViewChild(SelectorContableComponent, {
    static: false
  })
  private selectorContable!: SelectorContableComponent;

  formCuenta = new FormCuentaContable(this.builder);
  form: FormGroup = this.formCuenta.getForm();
  prefix: string;
  naturalezas = [];
  detalleCuentas = [];
  tipoMonedas = [];
  centroCostos = [];
  tipoCuentas = [{
    Id: 'activos',
    Label: 'Activos'
  }];

  constructor(private builder: FormBuilder,
    private acountService: ArbolHelper,
    private pUpManager: PopUpManager,
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
        this.cuenta = res;
        this.form.patchValue({
          ...res,
          Codigo: code
        });
      });
    }
  }

  setSelectedCount(account) {
    if (account && account.data) {
      const data = account.data;
      this.prefix = data.Codigo;
    }
  }

  addNode(node) {
    this.acountService.addNode(node).subscribe(res => {
      if (res) {
        this.pUpManager.showAlert('success', 'Cuenta contable', 'Cuenta registrada correctamente');
        this.form.reset();
      }
    });
  }

  updateNode(node, code) {
    const acount = {
      ...this.cuenta,
      ...node,
    };
    if (!this.prefix) {
      delete acount['Padre'];
    }
    this.acountService.updateNode(code, acount).subscribe(res => {
      if (res) {
        this.pUpManager.showAlert('success', 'Cuenta contable', 'Cuenta actualizada correctamente');
      }
    });
  }

  onSubmit() {
    if (this.form.valid && this.selectorContable.form.valid) {
      const code = `${this.prefix ? this.prefix + '-' : '' }${this.form.value.Codigo}`;
      const newAccount = {
        ...this.form.value,
        Nivel: code.split('-').length,
        Padre: this.prefix,
      };
      this.cuenta ? this.updateNode(newAccount, code) : this.addNode(newAccount);

    } else {
      this.form.markAllAsTouched();
      this.selectorContable.form.markAllAsTouched();
    }
  }

}
