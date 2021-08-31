import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DATOS_CONCEPTOS, CONFIGURACION_CONCEPTOS } from '../interfaces/interfaces';
import { ProvisionesHelper } from '../../../@core/helpers/provisiones/provisionesHelper';

@Component({
  selector: 'ngx-set-conceptoprovision',
  templateUrl: './set-conceptoprovision.component.html',
  styleUrls: ['./set-conceptoprovision.component.scss']
})
export class SetConceptoprovisionComponent implements OnInit {
  @ViewChild('eliminarTipoModal', { static: false }) eliminarTipoModal: ElementRef;


  datosConceptos: any;
  configConceptos: any;
  listaConcepto: object;
  totalProvision = 0;
  totalProvisionCesantias = 0;

  // Modales
  closeResult = '';

  conceptosProvisionGroup: FormGroup;

  constructor(private fb: FormBuilder, private modalService: NgbModal, public provisionHelper: ProvisionesHelper ) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.conceptosProvisionGroup = this.fb.group({
      conceptos: ['', Validators.required],
    });
    this.datosConceptos = DATOS_CONCEPTOS;
    this.configConceptos = CONFIGURACION_CONCEPTOS;
  }

  get conceptosInvalid() {
    return this.conceptosProvisionGroup.get('conceptos').invalid && this.conceptosProvisionGroup.get('conceptos').touched;
  }

  saveForm() {

    this.provisionHelper.nuevaProvision.conceptos = this.datosConceptos;
    this.provisionHelper.listaProvisiones.push(this.provisionHelper.nuevaProvision);
    this.TotalProvision();
    this.datosConceptos = DATOS_CONCEPTOS;
    // console.log(this.provisionHelper.listaProvisiones)
    if (this.conceptosProvisionGroup.invalid) {
      return Object.values(this.conceptosProvisionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    // this.createForm();
  }

  AddConcepto() {
    this.listaConcepto = {
      conceptoProvision: this.conceptosProvisionGroup.value.conceptos,
      porcentaje : 0.8333,
    };
    this.datosConceptos = this.datosConceptos.concat(this.listaConcepto);

  }

  TotalProvision() {
    this.totalProvision = 0;
    this.totalProvisionCesantias = 0;
    this.provisionHelper.listaProvisiones.forEach(provision => {
      provision.conceptos.forEach(element => {
        this.totalProvision = this.totalProvision + (element.porcentaje * provision.valorProvision);
        if (element.conceptoProvision === 'Cesantias') {
          this.totalProvisionCesantias = this.totalProvisionCesantias + (element.porcentaje * provision.valorProvision);
        }

      });
      provision.valorCesantias = this.totalProvisionCesantias;
      this.totalProvisionCesantias = 0;
      provision.valorConceptos = this.totalProvision;
    });
  }


  SelectedAction(accion: any, fila: any) {
    if (accion === 'borrarconcepto') {
      this.modalEliminar(fila);
    }
  }

    // Modal acciones sobre la tabla: eliminar registros
  modalEliminar(fila: any) {
    this.modalService.open(this.eliminarTipoModal).result.then((result) => {
      if (`${result}`) {
        this.datosConceptos.splice(fila, 1);
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

}
