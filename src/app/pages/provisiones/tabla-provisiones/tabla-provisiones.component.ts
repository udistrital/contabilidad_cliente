import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DATOS_LISTA_PROVISION, CONFIGURACION_LISTA_PROVISION } from '../interfaces/interfaces';
import { ProvisionesHelper } from '../../../@core/helpers/provisiones/provisionesHelper'

@Component({
  selector: 'ngx-tabla-provisiones',
  templateUrl: './tabla-provisiones.component.html',
  styleUrls: ['./tabla-provisiones.component.scss']
})
export class TablaProvisionesComponent implements OnInit {
  @ViewChild('eliminarTipoModal', { static: false }) eliminarTipoModal: ElementRef;

  configProvisiones: any;
  datosProvisiones: any;


   // Modales
   closeResult = '';

  constructor(
              private modalService: NgbModal, 
              private provisionesHelper : ProvisionesHelper
              ) { 
    //this.datosProvisiones = DATOS_LISTA_PROVISION;
    this.configProvisiones = CONFIGURACION_LISTA_PROVISION;
    this.datosProvisiones = this.provisionesHelper.TablaProvision;
  }

  ngOnInit() {

  }
  
  SelectedAction(accion:any, fila: any){
    if(accion === "verprovision"){
      console.log(this.datosProvisiones[fila]);
    }
    if(accion === "borrarprovision"){
      this.modalEliminar(fila)
    }
  }


    // Modal acciones sobre la tabla: eliminar registros
    modalEliminar(fila: any) {
      this.modalService.open(this.eliminarTipoModal).result.then((result) => {
        if (`${result}`) {
          this.datosProvisiones.splice(fila,1)
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


