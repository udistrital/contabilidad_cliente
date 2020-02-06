import { Component, OnInit, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConceptoHelper } from '../../../@core/helpers/concepto/conceptoHelper';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-list-conceptos',
  templateUrl: './list-conceptos.component.html',
  styleUrls: ['./list-conceptos.component.scss']
})
export class ListConceptosComponent implements OnInit {

  /*-- List entity Variables --*/
  formEntity: any;

  externalTabActive: boolean = true;
  isOnlyCrud:        boolean;
  viewItemSelected:  boolean;

  uuidReadFieldName:    string;
  deleteConfirmMessage: string;
  uuidDeleteFieldName:  string;
  updateMessage:        string;
  createMessage:        string;
  updateConfirmMessage: string;
  createConfirmMessage: string;
  formTittle:           string;
  deleteMessage:        string;

  listsettings:      object;
  paramsFieldsName:  object;
  listColumns:       object;

  loadFormDataFunction:     any;
  loadDataFunction    :     any;
  //loadDataFunction:     (...params) => Observable<any>;
  deleteDataFunction:   (...params) => Observable<any>;
  //loadFormDataFunction: (...params) => Observable<any>;
  updateEntityFunction: (...params) => Observable<any>;
  createEntityFunction: (...params) => Observable<any>;

  infooutput           = new EventEmitter<any>();
  eventChange          = new EventEmitter<any>();
  crudcambiotab        = new EventEmitter<boolean>();
  auxcambiotab         = new EventEmitter<boolean>();
  externalTabActivator = new EventEmitter<string>();

  /*-- Local Variables--*/
  listSettings: object;

  constructor(
    private translate: TranslateService,
    private conceptoHelper: ConceptoHelper
  ) { }

  ngOnInit() {
    this.loadFormDataFunction = this.conceptoHelper.getConceptos;
    this.loadDataFunction = this.conceptoHelper.getConceptos;
    this.isOnlyCrud = true;
    this.uuidReadFieldName = 'ID';
    this.uuidDeleteFieldName = 'ID';
    this.listColumns = {
      Nombre: {
        title: "Nombre",
        valuePrepareFunction: value => {
          return value;
        }
      },
      CuentaDebito: {
        title: "Cuenta Débito",
        valuePrepareFunction: value => {
          return value;
        }
      },
      CuentaCredito: {
        title: "Cuenta Crédito",
        valuePrepareFunction: value => {
          return value;
        }
      }
    };
    this.listSettings = {
      actions: {
        columnTitle: 'Opciones',
        add: true,
        edit: false,
        delete: false,
        custom: [
          { name: 'edit', title: '<i title="Editar" class="nb-edit"></i>' },
          { name: 'delete', title: '<i title="Eliminar" class="nb-trash"></i>' },],
        position: 'right'
      },
      add: {
        addButtonContent: '<i title="Nuevo Concepto" class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>'
      },
      mode: 'external',
      columns: this.listColumns,
    };
  }
}
