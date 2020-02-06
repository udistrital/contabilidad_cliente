import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConceptoHelper } from '../../../@core/helpers/concepto/conceptoHelper';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-list-conceptos',
  templateUrl: './list-conceptos.component.html',
  styleUrls: ['./list-conceptos.component.scss']
})
export class ListConceptosComponent implements OnInit {

  @Input("stateWizard") stateWizard:       string;
  @Input("setDataRequest") setDataRequest: string;
  @Output() wizardActivator      = new EventEmitter<string>();
  @Output() getAllConceptosNames = new EventEmitter<any>();
  @Output() emitDataRequested    = new EventEmitter<any>();

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
  deleteDataFunction  :     any;
  updateEntityFunction:     any;
  createEntityFunction:     any;

  infooutput           = new EventEmitter<any>();
  eventChange          = new EventEmitter<any>();
  crudcambiotab        = new EventEmitter<boolean>();
  auxcambiotab         = new EventEmitter<boolean>();
  externalTabActivator = new EventEmitter<string>();

  receiveMessage: any;
  onChange:       any;
  onFirstTab:     any;
  onChangeTab:    any;

  /*-- Local Variables--*/
  listSettings:   object;
  externalCreate: boolean = true;
  externalEdit:   boolean = true;
  arrayConceptoNames: string[] = [];


  constructor(
    private translate: TranslateService,
    private conceptoHelper: ConceptoHelper
  ) { }

  ngOnInit() {
    /* load Helper functions */
    this.loadFormDataFunction = this.conceptoHelper.getConceptos;
    this.loadDataFunction     = this.conceptoHelper.getConceptos;
    this.deleteDataFunction   = this.conceptoHelper.conceptoDelete;
    this.updateEntityFunction = this.conceptoHelper.conceptoUpdate;
    this.createEntityFunction = this.conceptoHelper.conceptoRegister;

    this.isOnlyCrud = true;
    this.uuidReadFieldName = 'ID';
    this.uuidDeleteFieldName = 'ID';
    this.deleteMessage = 'Eliminar Concepto'; // TODO: traducir
    this.deleteConfirmMessage = "Feliz, elimino el concepto!"; // TODO: traducir
    this.listColumns = {
      Nombre: {
        title: "Nombre",
        valuePrepareFunction: value => {
          this.arrayConceptoNames.push(value.toLowerCase());
          return value;
        }
      },
      CuentaDebito: {
        title: "Cuenta Débito", // TODO: traducir
        valuePrepareFunction: value => {
          return value;
        }
      },
      CuentaCredito: {
        title: "Cuenta Crédito", // TODO: traducir
        valuePrepareFunction: value => {
          return value;
        }
      }
    };
    this.listSettings = {
      actions: {
        columnTitle: 'Opciones', // TODO: traducir
        add: true,
        edit: false,
        delete: false,
        type:'html',
        custom: [
          { name: 'edit', type:'html', title: '<i title="Editar" class="nb-edit" nbTooltip="Editar Concepto" nbTooltipStatus="primary"></i>' },
          { name: 'delete', type:'html', title: '<i title="Eliminar" class="nb-trash" nbTooltip="Eliminar Concepto" nbTooltipStatus="primary"></i>' },],
        position: 'right'
      },
      add: {
        addButtonContent: '<i title="Nuevo Concepto" class="nb-plus" nbTooltip="Nuevo Concepto" nbTooltipStatus="primary"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>'
      },
      mode: 'external',
      columns: this.listColumns,
    };
    if(this.setDataRequest !== 'none') {
      this.emitData('conceptos-names');
    }
  }

  onExternalTabActivator(event){
    if (event === 'external-create') {
      this.stateWizard = 'open';
      this.wizardActivator.emit(this.stateWizard);
    } else {
      this.getAllConceptosNames.emit(this.arrayConceptoNames);
      console.log(event,'onExternalTabActivator');
    }
  }

  onChangeExternalTab(event){
    console.log(event,'onChangeExternalTab');
  }

  emitData(event) {
    if(event === 'conceptos-names') {
      let objectSend = { requested: event, data: this.arrayConceptoNames };
      this.emitDataRequested.emit(objectSend);
    }
    if(event === 'rowSelect') {
      console.log('emitData  rowSelect');
    }
  }
}
