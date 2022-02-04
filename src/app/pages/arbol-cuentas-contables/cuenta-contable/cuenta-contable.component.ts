import { SelectorContableComponent } from './../selector-contable/selector-contable.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormCuentaContable } from './form_nodo_cuenta_contable';
import { FormBuilder, FormGroup } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { ArbolHelper } from '../../../@core/helpers/arbol/arbolHelper';
import { PopUpManager } from '../../../@core/managers/popUpManager';
import { TesoreriaHelper } from '../../../@core/helpers/tesoreria/tesoreriaHelper';
import { map, startWith } from 'rxjs/operators';

export const _filter = (opt: any[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.name.toLowerCase().includes(filterValue) || item.NombreBanco.toLowerCase().includes(filterValue));
};
@Component({
  selector: 'ngx-cuenta-contable',
  templateUrl: './cuenta-contable.component.html',
  styleUrls: ['./cuenta-contable.component.scss']
})
export class CuentaContableComponent implements OnInit {

  @Input() cuenta;

  @Input() action;

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
  tipoCuentas = [];
  bancos = [];
  bancosFilter: Observable<any[]>;


  constructor(private builder: FormBuilder,
    private acountService: ArbolHelper,
    private pUpManager: PopUpManager,
    private bancosService: TesoreriaHelper
  ) { }

  ngOnInit() {
    this.buildData();
    this.loadParams();
    this.bancosService.getCuentasBancarias().subscribe(res => {
      if (res && res.Data) {
        this.bancos = this.groupBy(res.Data, 'NombreBanco');
      }
    });
    this.bancosFilter = this.form.get('Banco')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );
  }

  private _filterGroup(value): any[] {
    const valueKey: string = ( value && typeof value === 'object' ) ? value['name'] : value;
    if (valueKey) {
      return this.bancos
        .map(group => ({group: group.group, data: _filter(group.data, valueKey)}))
        .filter(group => group.data.length > 0);
    }

    return this.bancos;
  }

  private loadParams() {
    forkJoin([
      this.acountService.getNaturalezaCuenta(),
      this.acountService.getDetalleCuenta(),
      this.acountService.getTipoMoneda(),
      this.acountService.getCentroCostos(),
      this.acountService.getTipoCuenta()
    ]).subscribe(results => {
      this.naturalezas = results[0];
      this.detalleCuentas = results[1];
      this.tipoMonedas = results[2];
      this.centroCostos = results[3];
      this.tipoCuentas = results[4];
    });
  }

  private buildData() {
    if (this.cuenta) {
      const codes = this.cuenta.Codigo.split('-');
      const code = codes.pop();
      this.prefix = `${codes.join('-')}`;
      this.acountService.getInfoCuenta(this.cuenta.Id).subscribe(res => {
        this.cuenta = res;
        this.form.patchValue({
          ...res,
          Codigo: code
        });
        this.form.controls['Codigo'].disable();
      });
      if (this.action === 'ver') {
        this.form.disable();
      }
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
      Codigo: code
    };
    if (!this.prefix) {
      delete acount['Padre'];
    }
    this.acountService.updateNode(acount.Id, acount).subscribe(res => {
      if (res) {
        this.pUpManager.showAlert('success', 'Cuenta contable', 'Cuenta actualizada correctamente');
      }
    });
  }

  onSubmit() {
    if (this.form.valid && this.selectorContable.form.valid) {
      const code = `${this.prefix ? this.prefix + '-' : ''}${this.form.value.Codigo}`;
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

  dislayBanco = (value) => {
    return ( value && typeof value === 'object' ) ? value['name'] : value;
  }

  groupBy(xs, key) {
    let result;
    try {
      const grouped = xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push({...x, name: `${x.NombreSucursal} - ${x.NumeroCuenta}`});
        return rv;
      }, {});
      result = Object.keys(grouped).map((i) => ({ group: i, data: grouped[i] }));
    } catch {
      result = [];
    }
    return result;
  }

}
