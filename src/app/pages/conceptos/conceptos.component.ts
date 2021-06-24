import { AfterViewInit, Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@Component({
  selector: 'ngx-concepts-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.scss']
})

export class ConceptosComponent implements AfterViewInit, OnInit {

  @ViewChild('wizardCreateConcepto', {static: false}) wizardCreateConcepto: any;
  @ViewChild('modalEdit', {static: false}) modalEdit: any;

  showWizzardVar:   boolean = true;
  showEditModalVar: boolean = false;
  currentState:   string = 'open';
  setDataRequest: string = 'conceptos-names';
  namesConceptosArray: [] = [];
  conceptoToEdit: any;

  constructor(
      private cd: ChangeDetectorRef,
      private dialogService: NbDialogService ) { }

  ngOnInit() {
  }

  abrirWizard() {
    this.showWizzardVar = true;
    this.currentState = 'open';
  }

  cerrarWizard() {
    this.showWizzardVar = false;
    this.currentState = 'close';
  }

  updateStateWizard(newState: string) {
    this.currentState = newState;
  }

  abrirModal(conceptoData) {
    const dialogService = this.dialogService.open(
      EditModalComponent,
      {
        closeOnEsc: true,
        context: {
          id:            conceptoData.ID,
          nombre:        conceptoData.Nombre,
          cuentaCredito: conceptoData.CuentaCredito,
          cuentaDebito:  conceptoData.CuentaDebito
        }
      }
    ).onClose.subscribe(() => {
      // console.log('cierra modal');
    });
  }

  getAllConceptosNames(listNames: []) {
    this.namesConceptosArray = listNames;
  }

  getDataList(request: string) {
    if (request === 'get-names') {
      // console.log('getDataList');
    }
  }

  getDataRequested(event) {
    if (event.requested === 'conceptos-names') {
      this.setDataRequest = 'none';
      this.namesConceptosArray = event.data;
    } else if (event.requested === 'edit-concepto') {
      this.setDataRequest = 'none';
      this.conceptoToEdit = event.data;
      this.abrirModal(this.conceptoToEdit);
    }
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
