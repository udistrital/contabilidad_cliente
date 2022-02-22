import { SelectorContableComponent } from './../selector-contable/selector-contable.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormCuentaContable } from './form_nodo_cuenta_contable';
import { FormBuilder, FormGroup } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { ArbolHelper } from '../../../@core/helpers/arbol/arbolHelper';
import { PopUpManager } from '../../../@core/managers/popUpManager';
import { TesoreriaHelper } from '../../../@core/helpers/tesoreria/tesoreriaHelper';
import { map, startWith } from 'rxjs/operators';
import { groupBy } from '../../../@core/utils/general_utility';
import { MatDialog } from '@angular/material';
import { MovimientosCuentaComponent } from '../movimientos-cuenta/movimientos-cuenta.component';

export const _filter = (opt: any[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(x => `${x.NombreBanco} / ${x.NombreSucursal} - ${x.NumeroCuenta}`.toLowerCase().includes(filterValue));
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
  cuentasBancarias = [];
  bancosFilter: Observable<any[]>;
  code: string;


  constructor(private builder: FormBuilder,
    private acountService: ArbolHelper,
    private pUpManager: PopUpManager,
    private bancosService: TesoreriaHelper,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.buildData();
    this.loadParams();
    this.bancosFilter = this.form.get('CuentaBancariaID')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MovimientosCuentaComponent, {
      data: this.cuenta,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  private _filterGroup(value): any[] {
    const valueKey: string = ( value && typeof value === 'object' ) ? `${value.NombreBanco} / ${value.NombreSucursal} - ${value.NumeroCuenta}` : value;
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
      this.acountService.getTipoCuenta(),
      this.bancosService.getCuentasBancarias()
    ]).subscribe(results => {
      this.naturalezas = results[0];
      this.detalleCuentas = results[1];
      this.tipoMonedas = results[2];
      this.centroCostos = results[3];
      this.tipoCuentas = results[4];
      this.cuentasBancarias = results[5]!.Data;
      this.bancos = groupBy(this.cuentasBancarias, 'NombreBanco');
      if (this.cuenta) {
        this.loadAccount();
      }
    });
  }

  private buildData() {
    if (this.cuenta) {
      const codes = this.cuenta.Codigo.split('-');
      this.code = codes.pop();
      this.prefix = `${codes.join('-')}`;
      if (this.action === 'ver') {
        this.form.disable();
      }
    }
  }

  private loadAccount () {
    this.acountService.getInfoCuenta(this.cuenta.Id).subscribe(res => {
      this.cuenta = res;
      this.form.patchValue({
        ...res,
        CuentaBancariaID: res.CuentaBancariaID ? this.cuentasBancarias!.find(account => account.Id === res.CuentaBancariaID) : null,
        Codigo: this.code
      });
      this.form.controls['Codigo'].disable();
    });
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
    if (this.form.valid && ( this.selectorContable.form.valid || this.selectorContable.form.disabled )) {
      const formData = this.form.getRawValue();
      const code = `${this.prefix ? this.prefix + '-' : ''}${formData.Codigo}`;
      const newAccount = {
        ...formData,
        Nivel: code.split('-').length,
        Padre: this.prefix,
        CuentaBancariaID: formData.CuentaBancariaID!.Id || null,
      };
      this.cuenta ? this.updateNode(newAccount, code) : this.addNode(newAccount);

    } else {
      this.form.markAllAsTouched();
      this.selectorContable.form.markAllAsTouched();
    }
  }

  dislayBanco = (value) => {
    return ( value && typeof value === 'object' ) ? `${value.NombreBanco} / ${value.NombreSucursal} - ${value.NumeroCuenta}` : value;
  }

}
