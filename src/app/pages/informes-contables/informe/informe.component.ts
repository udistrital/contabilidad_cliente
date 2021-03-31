import { Component, OnInit, ViewChild,  ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformesContablesHelper } from '../../../@core/helpers/informesContables/informesContablesHelper';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'ngx-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.scss']
})
export class InformeComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  datosTabla: any;
  configTabla: any;
  informeGroup: FormGroup;
  titulo :string;

  constructor(
    private fb: FormBuilder, 
    public informesContablesHelper: InformesContablesHelper,
  ) { 
    this.datosTabla = this.informesContablesHelper.datosTabla.slice(0,5);
    this.configTabla = this.informesContablesHelper.configTabla;
    this.titulo = this.informesContablesHelper.titulo;
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.informeGroup = this.fb.group({
      vigencia: ['', Validators.required],
      fechaInicio: ['', Validators.required, ],
      fechaFin: ['', Validators.required],
      formato: ['', Validators.required],
    });
  }

  esInvalido(nombre: string) {
    const input = this.informeGroup.get(nombre);
    if (input)
      return input.invalid && (input.touched || input.dirty);
    else
      return true;
  }

  paginacion(event){
    this.datosTabla = this.informesContablesHelper.datosTabla.slice(event.pageIndex*event.pageSize, event.pageIndex*event.pageSize +event.pageSize);
  }

  saveForm() {
    if (this.informeGroup.invalid) {
      return Object.values(this.informeGroup.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
