import { Component,
         OnInit ,
         ViewChild,
         Input,
         Output,
         EventEmitter,
         ChangeDetectorRef } from '@angular/core';
import { NbButtonModule, NbStepperModule }    from '@nebular/theme';
import {
  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConceptoHelper } from '../../../@core/helpers/concepto/conceptoHelper';
import { ConceptosService } from '../../../@core/managers/conceptos.service';

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
      transition('close=>open',animate('100ms'))
    ]),
  ]
})
export class WizardComponent implements OnInit {

  @ViewChild('nbStepperWizard',{static: false}) nbStepperWizard   : any;
  @ViewChild('inputValidateName',{static:false}) inputValidateName: any;
  @Input('stateWizard') stateWizard: any;
  @Input('namesConceptosArray') namesConceptosArray: any;

  @Output() wizardActivator = new EventEmitter<boolean>();

  addWizardForm :   FormGroup;
  ayudacontrolForm: FormControl;
  nombreConcepto: any;
  nextBtnValidateName:    boolean = true;
  touchedBtnValidateName: boolean = false;
  numeroCuentaCredito: string = 'N/A';
  numeroCuentaDebito:  string = 'N/A';
  wizzardSteps: boolean = true;

  conceptoCreado = <any>{ 'Nombre':'','CuentaCredito':'','CuentaDebito':'', 'Contexto': 'no se a definido', 'MovimientoID': 'fake-movimiento' };

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private conceptoHelper: ConceptoHelper,
    private conceptoService: ConceptosService ) { }

  ngOnInit() {
    this.addWizardForm = this.fb.group({
      nombreConcepto:      new FormControl('',[Validators.required,Validators.minLength(4)]),
      numeroCuentaCredito: new FormControl(this.numeroCuentaCredito),
      numeroCuentaDebito:  new FormControl(this.numeroCuentaDebito)
    });
    this.nombreConcepto = this.addWizardForm.controls.nombreConcepto;
    this.ngAfterViewInit();
  }

  validateName(){
    this.touchedBtnValidateName = true;
    let localNameValidated = this.addWizardForm.value.nombreConcepto.toLowerCase();
    if('VALID' === this.nombreConcepto.status && !this.namesConceptosArray.includes(localNameValidated) ) {
      this.nextBtnValidateName   = false;
    }else{
      this.nombreConcepto.status = 'INVALID';
      this.nextBtnValidateName   = true;
    }
  }

  nameValidatedNextStep(){
    if(!this.nextBtnValidateName){
      this.nbStepperWizard.next();
    }
  }

  updateCuentaCredito(newCuenta: string) {
    this.numeroCuentaCredito = newCuenta;
    this.addWizardForm.value.numeroCuentaCredito = this.numeroCuentaCredito;
  }

  updateCuentaDebito(newCuenta: string) {
    this.numeroCuentaDebito = newCuenta;
    this.addWizardForm.value.numeroCuentaDebito = this.numeroCuentaDebito;
  }

  resetWizard() {
    this.addWizardForm.reset();
    this.numeroCuentaCredito = 'N/A';
    this.numeroCuentaDebito  = 'N/A';
    this.addWizardForm.value.numeroCuentaDebito  = this.numeroCuentaDebito;
    this.addWizardForm.value.numeroCuentaCredito = this.numeroCuentaCredito;
    this.nbStepperWizard.reset();
  }

  cerrarWizard(){
    this.stateWizard = 'close';
    this.wizardActivator.emit(this.stateWizard);
  }

  crearConcepto(){
    this.updateResumen();
    const registraConcepto = this.conceptoHelper.conceptoRegister(this.conceptoCreado).subscribe(res => {
      this.nbStepperWizard.next();
      this.conceptoService.updateEvent('update-list');
    });
  }

  updateResumen(){
    this.conceptoCreado.Nombre        = this.addWizardForm.value.nombreConcepto;
    this.conceptoCreado.CuentaDebito  = this.numeroCuentaDebito;
    this.conceptoCreado.CuentaCredito = this.numeroCuentaCredito;
  }

  checkWizardReset(event) {
    this.addWizardForm.reset();
    this.nbStepperWizard.reset();
    this.inputValidateName.nativeElement.focus();
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
    this.inputValidateName.nativeElement.focus();
  }

}
