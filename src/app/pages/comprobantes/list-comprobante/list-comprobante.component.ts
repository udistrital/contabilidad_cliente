import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import 'style-loader!angular2-toaster/toaster.css';
import { ComprobanteHelper } from '../../../@core/helpers/comprobantes/comprobanteHelper';
import { TipoComprobanteHelper } from '../../../@core/helpers/comprobantes/tipoComprobanteHelper';
import { FORM_COMPROBANTE } from './form-comprobante';
@Component({
  selector: 'ngx-list-comprobante',
  templateUrl: './list-comprobante.component.html',
  styleUrls: ['./list-comprobante.component.scss']
})
export class ListComprobanteComponent implements OnInit {
  @Output() comprobanteSeleccionado = new EventEmitter();
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
  paramsTab: boolean = false;

  listColumns: object;
  comprobanteInfo: any;
  disabledVigencia: boolean = false;
  tiposComprobante: any;
  constructor(
    private translate: TranslateService,
    private comprobanteHelper: ComprobanteHelper,
    private tipoComprobanteHelper: TipoComprobanteHelper,
     ) { }

  ngOnInit() {

  this.loadFormDataFunction = this.comprobanteHelper.getComprobantes;
  this.isOnlyCrud = false;
  this.uuidReadFieldName = '_id';
  this.uuidDeleteFieldName = '_id';
  this.deleteConfirmMessage = 'COMPROBANTE.confirmacion_actualizacion';
  this.deleteMessage = 'COMPROBANTE.mensaje_eliminar';
  this.deleteDataFunction = this.comprobanteHelper.comprobanteDelete;
  this.loadDataFunction = this.comprobanteHelper.getComprobantes;
  this.formEntity = FORM_COMPROBANTE;
  this.formTittle = 'COMPROBANTE.guardar_title';
  this.updateMessage = 'COMPROBANTE.mensaje_actualizar';
  this.createMessage = 'COMPROBANTE.mensaje_registrar';
  this.updateConfirmMessage = 'COMPROBANTE.confirmacion_actualizacion';
  this.createConfirmMessage = 'COMPROBANTE.confirmacion_creacion';
  this.updateEntityFunction = this.comprobanteHelper.comprobanteUpdate;
  this.createEntityFunction = this.comprobanteHelper.comprobanteRegister;
  this.listColumns = {
    TipoComprobante: {
      title: this.translate.instant('GLOBAL.tipo_comprobante'),
      // type: 'string;',
      valuePrepareFunction: value => {
        return value.TipoDocumento;
      }
    },
    Codigo: {
      title: this.translate.instant('GLOBAL.codigo'),
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
    Numero:{
      title: this.translate.instant('GLOBAL.numero'),
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
          { name: 'delete', title: '<i title="Eliminar" class="nb-trash"></i>' },
          { name: 'param', title: '<i title="Agregar Parámetros" class="nb-tables"></i>' }],
        position: 'right'
      },
      add: {
        addButtonContent: '<i title="Nuevo Comprobante" class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>'
      },
      mode: 'external',
      columns: this.listColumns,
    };
  }
  this.tipoComprobanteHelper.getTiposComprobante("").subscribe(res => {
    if (res) {
      this.tiposComprobante = res;
      this.loadOptionsTipoComprobante();
    }
  });

  }

  receiveMessage(event) {
    this.comprobanteInfo = event;
    if (this.viewItemSelected) {
      this.comprobanteSeleccionado.emit(this.comprobanteInfo);
    }
  }
  loadOptionsTipoComprobante(): void {
    let aplicacion = this.tiposComprobante;
    this.formEntity.campos[this.getIndexForm('TipoComprobante')].opciones = aplicacion;
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
  onFirstTab(estado) {
    this.disabledVigencia = estado;
  }
  onExternalTabActivator($event: string) {
    if ($event === 'external-create') {
      this.auxcambiotab = true;
      this.createTab = true;
      this.localtabActived = true;
    }if ($event === 'param') {
      this.paramsTab = true;
      this.localtabActived = true;
    } else {
      this.disabledVigencia = true;
      this.localtabActived = true;
      this.paramsTab = false;
    }

  }

  returnToList() {
    this.disabledVigencia = false;
    this.auxcambiotab = false;
    this.localtabActived = false;
    this.createTab = false;
    this.paramsTab = false
  }
}
