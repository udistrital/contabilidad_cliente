import { Component, OnInit, ChangeDetectorRef, ViewChild, ComponentRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { WizardComponent } from './wizard/wizard.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-concepts-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.scss']
})

export class ConceptosComponent implements OnInit {

  @ViewChild('wizardCreateConcepto',{static:false}) wizardCreateConcepto : any;
  @ViewChild('modalEdit',{static:false}) modalEdit :any;

  showWizzardVar:   boolean = true;
  showEditModalVar: boolean = false;
  currentState:   string = 'open';
  setDataRequest: string = 'conceptos-names';
  namesConceptosArray: [] = [];

  constructor(
      private cd: ChangeDetectorRef,
      private dialogService : NbDialogService ) { }

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

  abrirModal() {
    let dialogService = this.dialogService.open(
        EditModalComponent,
        {
          context: {
            context: 'Input ayuda',
          }
        }
        ).onClose.subscribe(()=> console.log('cierra modal'));
  }

  getAllConceptosNames(listNames : []){
    this.namesConceptosArray = listNames;
    console.log(listNames,'getAllConceptosNames');
  }

  getDataList(request: string) {
    if(request === 'get-names') {
      console.log('getDataList');
    }
  }

  getDataRequested(event) {
    if(event.requested === 'conceptos-names') {
      this.setDataRequest = 'none';
      this.namesConceptosArray = event.data;
    }
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
