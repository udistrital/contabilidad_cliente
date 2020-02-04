import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import 'style-loader!angular2-toaster/toaster.css';
import { TipoComprobanteHelper } from '../../../@core/helpers/comprobantes/tipoComprobanteHelper';
import { FORM_TIPO_COMPROBANTE } from './form-tipo-comprobante';


@Component({
  selector: 'ngx-list-tipo-comprobante',
  templateUrl: './list-tipo-comprobante.component.html',
  styleUrls: ['./list-tipo-comprobante.component.scss']
})
export class ListTipoComprobanteComponent implements OnInit {

  @Output() tipoComprobanteSeleccionado = new EventEmitter();
  @Input() viewItemSelected: boolean;
  uuidReadFieldName: string;
  paramsFieldsName: object;
  uuidDeleteFieldName: string;
  deleteConfirmMessage: string;
  deleteMessage: string;
  loadDataFunction: (...params) => Observable<any>;
  deleteDataFunction: (...params) => Observable<any>;
  formEntity: any;
  formTittle: string;
  updateMessage: string;
  createMessage: string;
  updateConfirmMessage: string;
  createConfirmMessage: string;
  vigenciaSel: any;
  vigencias: any[];
  loadFormDataFunction: (...params) => Observable<any>;
  updateEntityFunction: (...params) => Observable<any>;
  createEntityFunction: (...params) => Observable<any>;
  isOnlyCrud: boolean;
  listSettings: object;
  auxcambiotab: boolean = false;
  createTab: boolean = false;
  localtabActived: boolean = false;
  viewTab: boolean = false;

  listColumns: object;
  tipoComprobanteInfo: any;
  disabledVigencia: boolean = false;

  constructor(
    private translate: TranslateService,
    private tipoComprobanteHelper: TipoComprobanteHelper) {   }

   ngOnInit() {
    //this.paramsFieldsName = { Vigencia: this.vigenciaSel, UnidadEjecutora: 1 };
    this.loadFormDataFunction = this.tipoComprobanteHelper.getTiposComprobante;
    this.isOnlyCrud = false;
    this.uuidReadFieldName = 'Codigo';
    this.uuidDeleteFieldName = 'Codigo';
    this.deleteConfirmMessage = 'TIPO_COMPROBANTE.confirmacion_actualizacion';
    this.deleteMessage = 'TIPO_COMPROBANTE.mensaje_eliminar';
    this.deleteDataFunction = this.tipoComprobanteHelper.tipoComprobanteDelete;
    this.loadDataFunction = this.tipoComprobanteHelper.getTiposComprobante;
    this.formEntity = FORM_TIPO_COMPROBANTE;
    this.formTittle = 'TIPO_COMPROBANTE.guardar_title';
    this.updateMessage = 'TIPO_COMPROBANTE.mensaje_actualizar';
    this.createMessage = 'TIPO_COMPROBANTE.mensaje_registrar';
    this.updateConfirmMessage = 'TIPO_COMPROBANTE.confirmacion_actualizacion';
    this.createConfirmMessage = 'TIPO_COMPROBANTE.confirmacion_creacion';
    this.updateEntityFunction = this.tipoComprobanteHelper.tipoComprobanteUpdate;
    this.createEntityFunction = this.tipoComprobanteHelper.tipoComprobanteRegister;
    this.listColumns = {
      TipoDocumento: {
        title: this.translate.instant('GLOBAL.tipo_documento'),
        // type: 'string;',
        valuePrepareFunction: value => {
          return value;
        }
      },
      Descripcion: {
        title: this.translate.instant('GLOBAL.descripcion'),
        // type: 'string;',
        valuePrepareFunction: value => {
          return value;
        }
      },
      FechaModificacion: {
        title: this.translate.instant('GLOBAL.fecha_modificacion'),
        valuePrepareFunction: (value) => {
          const date = new Date(value);
          return `${date.getFullYear()}-${date.getMonth() + 1}-${('0' + date.getDate()).slice(-2)}`;
        }
      }
    };
    if (this.viewItemSelected) {
      this.listSettings = {
        actions: {
          add: false,
          edit: false,
          delete: false,
          position: 'right'
        },
        mode: 'external',
        columns: this.listColumns,
      };
    } else {

      this.listSettings = {
        actions: {
          add: true,
          edit: false,
          delete: false,
          custom: [
            { name: 'edit', title: '<i title="Editar" class="nb-edit"></i>' },
            { name: 'delete', title: '<i title="Eliminar" class="nb-trash"></i>' },],
          position: 'right'
        },
        add: {
          addButtonContent: '<i title="Nuevo Tipo de Comprobante" class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>'
        },
        mode: 'external',
        columns: this.listColumns,
      };
    }
  }
  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formEntity.campos.length; index++) {
      const element = this.formEntity.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }
  onChangeTab(estado) {
    this.disabledVigencia = estado;
    this.auxcambiotab = estado;
  }
  onFirstTab(estado) {
    this.disabledVigencia = estado;
  }
  receiveMessage(event) {
    this.tipoComprobanteInfo = event;
    if (this.viewItemSelected) {
      this.tipoComprobanteSeleccionado.emit(this.tipoComprobanteInfo);
    }
  }

  onSelect(selectedItem: any) {
    this.vigenciaSel = selectedItem;
    if(this)
    this.paramsFieldsName = { Vigencia: this.vigenciaSel, UnidadEjecutora: 1 };
    // this.eventChange.emit(true);
  }
  onExternalTabActivator($event: string) {
    if ($event === 'external-create') {
      this.auxcambiotab = true;
      this.createTab = true;
      this.localtabActived = true;
    } else if ($event === 'other') {
      this.viewTab = false;
      this.localtabActived = true;
    } else {
      this.disabledVigencia = true;
      this.localtabActived = true;
      this.viewTab = true;
    }

  }
  returnToList() {
    this.disabledVigencia = false;
    this.auxcambiotab = false;
    this.localtabActived = false;
    this.createTab = false;
    this.viewTab = false
  }


}
