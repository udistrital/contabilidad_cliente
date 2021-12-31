import { FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormControl } from '../reactive-form-structure';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-reactive-control',
  templateUrl: './reactive-control.component.html',
  styleUrls: ['./reactive-control.component.scss']
})
export class ReactiveControlComponent implements OnInit {

  private _data: ReactiveFormControl;

  @Input('data')
  public get data(): ReactiveFormControl {
    return this._data;
  }
  public set data(value: ReactiveFormControl) {
    this._data = value;
    if (value && this.control) {
      this.buildControl();
    }
  }

  @Input('control') control: FormControl;

  @Output() controlChange ?: EventEmitter < FormControl > = new EventEmitter();

  filterList: Observable < any[] > ;
  selectList: any[];

  constructor() {}

  ngOnInit() {
    this.buildControl();
  }

  private buildControl() {
    if (this.data) {
      //const [parent, value] = [this.control.parent, this.control.value];

      switch (this.data.type) {
        case 'autocomplete':
          this.buildAutocomplete(this.data);
          break;
        case 'input':
          this.buildInput(this.data);
          break;
        case 'button':
          this.buildButton(this.data);
          break;
        case 'select':
          this.buildSelect(this.data);
          break;
        default:
          break;
      }
      //this.control.setValue(this.control.value || this.data.defaultValue);
      this.control.setValidators(this.data.validators);
      //this.control.setParent(parent);
      //this.control.setValue(value);
      this.controlChange.emit(this.control);
    }
  }

  buildAutocomplete(item: ReactiveFormControl) {
    //const formControl = new FormControl(item.defaultValue, item.validators);
    this.filterList = this.control.valueChanges.pipe(
      startWith(''),
      map(value => {
        item.valueChanges ? item.valueChanges(this.control.parent) : null;
        return item.optionList.elements(this.control.parent).filter(option => {
          const labelKey: string = option[item.optionList.labelKey] || option;
          const valueKey: string = value && typeof value === 'object' ? value[item.optionList.labelKey] : value;
          return labelKey.toLowerCase().includes(valueKey ? valueKey.toLowerCase() : '');
        });
      }),
    );
    //return formControl;
  }

  focusAutocomplete() {
    if (!this.control.value) {
      this.control.setValue('');
    }
    this.control.setValue(this.control.value);
  }

  dislayAutocomplete = (value) => {
    // value && typeof value === 'object' ? value[item.optionList.labelKey] : value;
    return value && typeof value === 'object' ? value[this.data.optionList.labelKey] : value;
  }

  buildInput(item: ReactiveFormControl) {
    // const formControl = new FormControl(item.defaultValue, item.validators);
  }

  buildSelect(item: ReactiveFormControl) {
    this.selectList = item.optionList.elements();
    if(this.control.value && !item.optionList.valueid) {
      this.control.setValue(this.selectList.find(option => option[item.optionList.idKey] === this.control.value[item.optionList.idKey]));
    }
  }

  buildButton(item: ReactiveFormControl) {
    const formControl = new FormControl(item.label);
    this.control.setValue(item.label);
  }

}
