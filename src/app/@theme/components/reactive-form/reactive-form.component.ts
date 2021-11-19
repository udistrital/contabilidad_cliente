import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormControl, ReactiveFormStructure, ReactiveFormGroup, isGroup } from './reactive-form-structure';

@Component({
  selector: 'ngx-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  private _reactiveForm: FormGroup;
  private _value: any = {};

  @Input('dataForm') dataForm: ReactiveFormStructure;

  @Input('value')
  public get value(): FormGroup {
    return this._value;
  }
  public set value(value: FormGroup) {
    this._value = value;
  }

  @Input('reactiveForm')
  public get reactiveForm(): FormGroup {
    return this._reactiveForm;
  }
  public set reactiveForm(value: FormGroup) {
    this._reactiveForm = value;
    this.reactiveFormChange.emit(this._reactiveForm);
  }

  @Output() reactiveFormChange: EventEmitter < FormGroup > = new EventEmitter();

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.reactiveForm = this.builderForm(this.dataForm);
    this.reactiveForm.setValue({
      ...this.reactiveForm.value,
      ...this._value
    });
  }

  builderForm(form: ReactiveFormStructure) {
    const node = this.buildElement(form.controls);
    return this.builder.group(node);
  }

  private buildElement(controls: (ReactiveFormControl | ReactiveFormGroup)[]) {
    const node = {};
    controls.forEach(element => {
      if (isGroup(element)) {
        node[element.key] = this.builder.group(this.buildElement(element.controls));
      } else {
        node[element.key] = new FormControl();
      }
    });
    return node;
  }

}
