import { Component, OnInit , ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { NbButtonModule, NbStepperModule }    from '@nebular/theme';
import {
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  animations: [
    trigger('openDivWizard',[
      state('open', style({
        opacity: 1,
        maxHeight: 100
      })),
      state('close', style({
        opacity: 0,
        maxHeight: 0
      })),
      transition('open=>close',animate('500ms')),
      transition('close=>open',animate('50ms'))
    ]),
  ]
})
export class WizardComponent implements OnInit {

  @ViewChild('nbStepperWizard',{static: false}) nbStepperWizard;
  @Input("stateWizard") stateWizard: any;
  @Output() closedWizard = new EventEmitter<boolean>();

  addWizardForm : FormGroup;
  ayudacontrolForm: FormControl;
  nombreConcepto: any;
  nextBtnValidateName: boolean = true;

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.addWizardForm = this.fb.group({
      nombreConcepto: new FormControl('',[Validators.required,Validators.minLength(4)]),
    });
    this.nombreConcepto = this.addWizardForm.controls.nombreConcepto;
  }

  validateName(){
    if('VALID' === this.nombreConcepto.status){
      this.nextBtnValidateName = false;
    }else{
      this.nextBtnValidateName = true;
    }
  }

  nameValidatedNextStep(){
    if(!this.nextBtnValidateName){
      this.nbStepperWizard.next();
    }
  }

  resetWizard() {
    this.nbStepperWizard.reset();
  }

  cerrarWizard(){
    this.stateWizard = 'close';
    this.closedWizard.emit(this.stateWizard);
  }

  crearConcepto(){
    this.addWizardForm.markAsDirty();
    console.log('submit');
  }

}
