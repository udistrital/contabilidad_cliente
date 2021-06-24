import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConciliacionesHelper } from '../../../@core/helpers/conciliaciones/conciliacionesHelper';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-tabla-conciliaciones',
  templateUrl: './tabla-conciliaciones.component.html',
  styleUrls: ['./tabla-conciliaciones.component.scss']
})
export class TablaConciliacionesComponent implements OnInit {
  @ViewChild('eliminarTipoModal', { static: false }) eliminarTipoModal: ElementRef;

  configConciliaciones: any;
  datosConciliaciones: any;

  // Modales
  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private conciliacionesHelper: ConciliacionesHelper,
    private router: Router,
  ) {
    this.configConciliaciones = this.conciliacionesHelper.configTabla;
    this.datosConciliaciones = this.conciliacionesHelper.tablaConciliacion;
  }

  ngOnInit() {
  }

  SelectedAction(accion: any, fila: any) {
    if (accion === 'verconciliacion') {
      console.log(this.datosConciliaciones[fila]);
    }
    if (accion === 'borrarconciliacion') {
      this.modalEliminar(fila);
    }
    if (accion === 'contabilizacion') {
      this.router.navigate(['pages/conciliaciones/conciliacion']);
    }
  }


    // Modal acciones sobre la tabla: eliminar registros
    modalEliminar(fila: any) {
      this.modalService.open(this.eliminarTipoModal).result.then((result) => {
        if (`${result}`) {
          this.datosConciliaciones.splice(fila, 1);
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
