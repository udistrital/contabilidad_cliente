import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WizardComponent } from './wizard/wizard.component';

@Component({
  selector: 'ngx-concepts-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.scss']
})

export class ConceptosComponent implements OnInit {
  showModalVar:   boolean = true;
  currentState:   string = 'open';
  setDataRequest: string = 'conceptos-names';
  namesConceptosArray: [] = [];

  constructor( private cd: ChangeDetectorRef ) { }

  ngOnInit() {
  }

  abrirWizard() {
    this.showModalVar = true;
    this.currentState = 'open';
  }

  cerrarWizard() {
    this.showModalVar = false;
    this.currentState = 'close';
  }

  updateStateWizard(newState: string) {
    this.currentState = newState;
  }

  abrirModal() {
    console.log("Abrir modal!",'abrirModal');
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
