import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DATOS_REGIMEN, CONFIGURACION_REGIMEN } from '../interfaces/interfaces';
import { ProvisionesHelper } from '../../../@core/helpers/provisiones/provisionesHelper'

@Component({
  selector: 'ngx-set-calculoregimen',
  templateUrl: './set-calculoregimen.component.html',
  styleUrls: ['./set-calculoregimen.component.scss']
})
export class SetCalculoregimenComponent implements OnInit {


  datosRegimen: any;
  configRegimen: any;
  totalRegimenNuevo: number = 0;
  totalRegimenAntiguo: number = 0;

  regimenGroup: FormGroup;

  constructor(private fb: FormBuilder, public provisionesHelper: ProvisionesHelper) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.regimenGroup = this.fb.group({
      regimen: ['', Validators.required],
    });
    this.configRegimen = CONFIGURACION_REGIMEN;
    this.datosRegimen = [{}];
  }


  get regimenInvalid() {
    return this.regimenGroup.get('regimen').invalid && this.regimenGroup.get('regimen').touched;
  }

  onChange(itemSelected, provision){
    let porcentaje: number;
    let valor: number;
    let Regimen: any;
    switch(itemSelected){
      case "Antíguo":
        porcentaje = 61.62;
        valor = (porcentaje* provision.valorCesantias)/100;
        Regimen = [{
          regimen: 'Antíguo',
          porcentaje: porcentaje.toString() + "%",
          valor: "$" + valor.toString(),
        }];
        break;

      case "Nuevo":
        porcentaje = 38.38;
        valor = (porcentaje* provision.valorCesantias)/100;
        Regimen = [{
          regimen: 'Nuevo',
          porcentaje: porcentaje.toString() + "%",
          valor: "$" + valor.toString(),
        }];
        break;

      case "Antíguo/Nuevo":
        porcentaje = 61.62;
        valor = (porcentaje* provision.valorCesantias)/100;
        Regimen = [{
          regimen: 'Antíguo',
          porcentaje: porcentaje.toString() + "%",
          valor: "$" + valor.toString(),
        }];

        porcentaje = 38.38;
        valor = (porcentaje* provision.valorCesantias)/100;
        Regimen.push({
          regimen: 'Nuevo',
          porcentaje: porcentaje.toString() + "%",
          valor: "$" + valor.toString(),
        });
        break;

      default:
        this.datosRegimen= [{}];
        break;

    }
    provision.datosRegimen = Regimen;
    this.datosRegimen = provision.datosRegimen;
    this.TotalRegimen()
  }

  onTabChanged($event){
    this.configRegimen = CONFIGURACION_REGIMEN;
    this.datosRegimen = this.provisionesHelper.listaProvisiones[$event.index].datosRegimen;
  }

  TotalRegimen(){
    this.totalRegimenNuevo = 0;
    this.totalRegimenAntiguo= 0;
    this.provisionesHelper.listaProvisiones.forEach(provision => {
      provision.datosRegimen.forEach(regimen => {
          if(regimen.regimen === "Nuevo"){
            this.totalRegimenNuevo = this.totalRegimenNuevo + +regimen.valor.split("$")[1]
          }else{
            this.totalRegimenAntiguo = this.totalRegimenAntiguo + +regimen.valor.split("$")[1]
          }
      });
    });
  }

  saveForm() {
    if (this.regimenGroup.invalid) {
      return Object.values(this.regimenGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
