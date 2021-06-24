import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroNominaHelper } from '../../../@core/helpers/registroNomina/registroNominaHelper';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-tabla-registro-nomina',
  templateUrl: './tabla-registro-nomina.component.html',
  styleUrls: ['./tabla-registro-nomina.component.scss']
})
export class TablaRegistroNominaComponent implements OnInit {
  @ViewChild('eliminarTipoModal', { static: false }) eliminarTipoModal: ElementRef;

  configRegistro: any;
  datosRegistro: any;

  // Modales
  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private registroNominaHelper: RegistroNominaHelper,
    private router: Router,
  ) {
    this.configRegistro = this.registroNominaHelper.configTabla;
    this.datosRegistro = this.registroNominaHelper.datosTabla;
    this.registroNominaHelper.contabilizacion = 'lista';
  }

  ngOnInit() {
  }

  SelectedAction(accion: any, fila: any) {
    if (accion === 'borrarRegistro') {
      this.modalEliminar(fila);
    }
    if (accion === 'verRegistro') {
      this.router.navigate(['pages/registroNomina/contabilizacion']);
    }
  }


    // Modal acciones sobre la tabla: eliminar registros
    modalEliminar(fila: any) {
      this.modalService.open(this.eliminarTipoModal).result.then((result) => {
        if (`${result}`) {
          this.datosRegistro.splice(fila, 1);
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
