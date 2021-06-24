import { Component, OnInit, ViewChild,  ElementRef  } from '@angular/core';
import { ConciliacionesHelper } from '../../../@core/helpers/conciliaciones/conciliacionesHelper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-contabilizacion',
  templateUrl: './contabilizacion.component.html',
  styleUrls: ['./contabilizacion.component.scss']
})
export class ContabilizacionComponent implements OnInit {
  @ViewChild('exampleModal2', { static: false }) guardarModal: ElementRef;

  datosConciliacionNCLibros: any;
  datosConciliacionNDLibros: any;
  configContabilizacion: any;
  contabilizacionGroup: FormGroup;

  tabsTitles: string[] = ['ND NO REG LIBROS', 'NC NO REG LIBROS'];

  // Modales
  closeResult = '';


  constructor(private fb: FormBuilder, public conciliacionesHelper: ConciliacionesHelper, private modalService: NgbModal) {
    this.datosConciliacionNCLibros = this.conciliacionesHelper.datosConciliacionNCLibros;
    this.datosConciliacionNDLibros = this.conciliacionesHelper.datosConciliacionNDLibros;
    this.configContabilizacion = this.conciliacionesHelper.configContabilizacion;
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.contabilizacionGroup = this.fb.group({
      numeroComprobante: ['', Validators.required],
      tipoComprobante: ['', Validators.required, ],
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

  onChange(itemSelected) {
  }

  onTabChanged($event) {
  }

  // Modal acciones sobre la tabla: eliminar registros
  modalAprobar() {
    this.modalService.open(this.guardarModal).result.then((result) => {
      if (`${result}`) {
        console.log('Aprobado');
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

  saveForm() {
    if (this.contabilizacionGroup.invalid) {
      return Object.values(this.contabilizacionGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
