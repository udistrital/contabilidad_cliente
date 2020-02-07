import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbWindowService } from '@nebular/theme';
import { WizardComponent } from './wizard/wizard.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-concepts-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.scss']
})

export class ConceptosComponent implements OnInit {

  @ViewChild('wizardCreateConcepto',{static:false}) wizardCreateConcepto : any;
  @ViewChild('modalEdit',{static:false}) modalEdit                       : any;

  showModalVar:   boolean = true;
  currentState:   string = 'open';
  setDataRequest: string = 'conceptos-names';
  namesConceptosArray: [] = [];

  constructor( private cd: ChangeDetectorRef, private windowService : NbWindowService ) { }

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
    this.windowService.open(
      this.modalEdit,
      {
        title: 'Modal Edit',
        context: 'some text'
      });
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
