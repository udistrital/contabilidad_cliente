import { Component, Input, OnInit } from '@angular/core';
import { myForm} from './form_nodo_cuenta_contable';
import { FormBuilder } from '@angular/forms';
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

  dataForm = {...myForm};
  valueForm: any = {
    Codigo: '',
    Activo: true,
    Nombre: '',
    NaturalezaCuentaID: '',
    tipoCuenta: '',
    DetalleCuentaID: '',
    tieneCentroCostos: false,
    CentroDecostosID: '',
    RequiereTercero: false,
    tercero: '',
    Ajustable: false,
    Nmnc: false,
    MonedaID: '',
  };
  form = this.builder.group( this.valueForm);

  indexAcount: string;

  dataNaturalezas = this.store.pipe(select(selectAllNaturalezas));

  constructor(private builder: FormBuilder,
    private store: Store<any>,
    private acountService: ArbolHelper
    ) {}

  ngOnInit() {
    this.dataNaturalezas.subscribe(res => {
      //console.log(res, '****/*');
    });
    this.buildData();
    this.form.setValue(this.valueForm);

  }

  private loadParams() {
    forkJoin([
      this.acountService.getNaturalezaCuenta(),
      this.acountService.getDetalleCuenta(),
      this.acountService.getTipoMoneda(),
      this.acountService.getCentroCostos()
    ]).subscribe(results => {
      this.dataForm.NaturalezaCuentaID = {
        ...this.dataForm.NaturalezaCuentaID,
        optionList: {
          elements: () => results[0],
          labelKey: 'Label',
          idKey: 'Id'
        }
      };
      this.dataForm.DetalleCuentaID = {
        ...this.dataForm.DetalleCuentaID,
        optionList: {
          elements: () => results[1],
          labelKey: 'Label',
          idKey: 'Id'
        }
      };
      this.dataForm.MonedaID = {
        ...this.dataForm.MonedaID,
        optionList: {
          elements: () => results[2],
          labelKey: 'Label',
          idKey: 'Id'
        }
      };
      this.dataForm.CentroDecostosID = {
        ...this.dataForm.CentroDecostosID,
        optionList: {
          elements: () => results[3],
          labelKey: 'Label',
          idKey: 'Id'
        }
      };
    });
  }

  private buildData() {

    if (this.cuenta) {
      this.acountService.getInfoCuenta(this.cuenta.Codigo).subscribe(res => {
        this.valueForm.RequiereTercero = res.RequiereTercero;
        this.valueForm.Nmnc = res.Nmnc;
        this.valueForm.Ajustable = res.Ajustable;
        this.valueForm.NaturalezaCuentaID = {Label: res.NaturalezaCuentaID, Id: res.NaturalezaCuentaID};
        this.valueForm.MonedaID = {Label: res.MonedaID, Id: res.MonedaID};
        this.valueForm.DetalleCuentaID = {Label: res.DetalleCuentaID, Id: res.DetalleCuentaID};
        this.valueForm.CentroDecostosID = {Label: res.CentroDecostosID, Id: res.CentroDecostosID};
        this.form.setValue(this.valueForm);
        this.loadParams();
      });

      const codes = this.cuenta.Codigo.split('-');
      this.valueForm.Codigo = codes.pop();
      this.indexAcount = codes.join('-');
      this.dataForm.Codigo.prefix = `${this.indexAcount}-`;
      this.valueForm.Nombre = this.cuenta.Nombre;
    } else {
      this.loadParams();
    }
  }

  something() {
    this.form.markAllAsTouched();
    console.log(this.form);
    
  }

  setSelectedCount(count) {

  }

  validarForm($event) {

  }

  validarCampo($event) {

  }

  validateSelector($event) {
    console.log($event);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
