import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ConciliacionesHelper } from '../../../@core/helpers/conciliaciones/conciliacionesHelper';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-set-conciliacion-bancaria',
  templateUrl: './set-conciliacion-bancaria.component.html',
  styleUrls: ['./set-conciliacion-bancaria.component.scss']
})
export class SetConciliacionBancariaComponent implements OnInit {
  @ViewChild('exampleModal2', { static: false }) guardarModal: ElementRef;

  configConciliaciones: any;
  datosConciliaciones: any;

  // Modales
  closeResult = '';

  constructor(
    private conciliacionesHelper: ConciliacionesHelper,
    private modalService: NgbModal,
    ) {
    this.configConciliaciones = this.conciliacionesHelper.configConciliacion;
    this.datosConciliaciones = this.conciliacionesHelper.datosConciliacion;
  }

  ngOnInit() {
  }

  // Modal acciones sobre la tabla: eliminar registros
  modalGuardar() {
    this.modalService.open(this.guardarModal).result.then((result) => {
      if (`${result}`) {
        console.log('GUARDADO');
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
