import { Component, OnInit, ViewChild,  ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONFIGURACION_CONTABILIZACION, DATOS_CONTABILIZACION } from '../interfaces/interfaces';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProvisionesHelper } from '../../../@core/helpers/provisiones/provisionesHelper'

@Component({
  selector: 'ngx-set-contabilizacion',
  templateUrl: './set-contabilizacion.component.html',
  styleUrls: ['./set-contabilizacion.component.scss']
})
export class SetContabilizacionComponent implements OnInit {
  @ViewChild('exampleModal2', { static: false }) guardarModal: ElementRef;

  contabilizacionGroup: FormGroup;
  configContabilizacion: any;
  datosContabilizacion: any;
  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

     // Modales
     closeResult = '';

  constructor(private fb: FormBuilder, private provisionHelper : ProvisionesHelper, private modalService: NgbModal, ) { 
    this.datosContabilizacion = DATOS_CONTABILIZACION;
    //this.datosContabilizacion = [];
    this.configContabilizacion = CONFIGURACION_CONTABILIZACION;
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.contabilizacionGroup = this.fb.group({
      numeroComprobante: ['', Validators.required],
      tipoComprobante: ['',Validators.required,],
      consecutivo: ['', Validators.required],
      concepto: ['', Validators.required],
    });
  }



  esInvalido(nombre: string) {
    const input = this.contabilizacionGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

    // Modal acciones sobre la tabla: eliminar registros
  modalGuardar() {
    this.modalService.open(this.guardarModal).result.then((result) => {
      if (`${result}`) {
        console.log("GUARDADO")
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  GuardarProvisiones(){
    this.provisionHelper.listaProvisiones.forEach(provision => {
      provision = this.AjusteFecha(provision);
      provision.consecutivo = +this.provisionHelper.TablaProvision[this.provisionHelper.TablaProvision.length-1].consecutivo + 1;
      this.provisionHelper.TablaProvision.push(provision)
      //console.log(this.provisionHelper.TablaProvision)

    });
  }

  AjusteFecha(provision: any){
    let mes : string;
    mes = (this.meses.findIndex( index => index === provision.mes) + 1).toString();
    provision.fechainicial = "01/"+mes+"/2020";
    provision.fechafinal = "30/"+mes+"/2020";
    return provision;
  }

  saveForm() {

    this.provisionHelper.listaProvisiones.forEach(provision => {
      provision.contabilizacion = this.contabilizacionGroup.value;
    });
    this.GuardarProvisiones();
    this.modalGuardar()
    if (this.contabilizacionGroup.invalid) {
      return Object.values(this.contabilizacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
