import { Component, OnInit, ViewChild,  ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistroNominaHelper } from '../../../@core/helpers/registroNomina/registroNominaHelper';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-contabilizacion',
  templateUrl: './contabilizacion.component.html',
  styleUrls: ['./contabilizacion.component.scss']
})
export class ContabilizacionComponent implements OnInit {

  @ViewChild('exampleModal2', { static: false }) guardarModal: ElementRef;
  @ViewChild('exampleModal', { static: false }) aprobarModal: ElementRef;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  datosContabilizacion: any;
  configContabilizacion: any;
  contabilizacionGroup: FormGroup;
  prueba = 'prueba';


  // Modales
  closeResult = '';

  constructor(
    private fb: FormBuilder,
    public registroNominaHelper: RegistroNominaHelper,
    private modalService: NgbModal,
    private router: Router,
  ) {
    this.datosContabilizacion = this.registroNominaHelper.datosContabilizacion.slice(0, 5);
    this.configContabilizacion = this.registroNominaHelper.configContabilizacion;
    this.createForm();
    this.registroNominaHelper.back = 'contabilizacion';
   }

  ngOnInit() {

  }

  paginacion(event) {
    this.datosContabilizacion = this.registroNominaHelper.datosContabilizacion.slice(event.pageIndex * event.pageSize, event.pageIndex * event.pageSize + event.pageSize);
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

  // Modal acciones sobre la tabla: eliminar registros
  modalAprobar() {
    this.modalService.open(this.aprobarModal).result.then((result) => {
      if (`${result}`) {
        // console.log('Aprobado');
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // Modal acciones sobre la tabla: eliminar registros
  modalGuardar() {
    this.modalService.open(this.guardarModal).result.then((result) => {
      if (`${result}`) {
        // console.log('Guardar');
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

  SelectedAction(accion: any, fila: any) {
    if (accion === 'ver') {
      this.router.navigate(['pages/registroNomina/desagregacion']);
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
