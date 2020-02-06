import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WizardComponent } from './wizard/wizard.component';

@Component({
  selector: 'ngx-concepts-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.scss']
})

export class ConceptosComponent implements OnInit {
  showModalVar: boolean = false;
  currentState: string = 'close';

  constructor() { }

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
    console.log("Abrir modal!");
  }
}
