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

  @Input('data') data: ReactiveFormControl;

  @Input('control') control: FormControl;

  @Output() controlChange ?: EventEmitter < FormControl > = new EventEmitter();

  filterList: Observable < any[] > ;

  constructor() {}

  ngOnInit() {
    this.buildControl();
  }

  private buildControl() {
    if (this.data) {
      const [parent, value] = [this.control.parent, this.control.value];

      switch (this.data.type) {
        case 'autocomplete':
          this.control = this.buildAutocomplete(this.data);
          break;
        case 'input':
          this.control = this.buildInput(this.data);
          break;
        case 'button':
          this.control = this.buildButton(this.data);
          break;
        default:
          break;
      }
      this.control.setParent(parent);
      this.control.setValue(value);
      this.controlChange.emit(this.control);
    }
  }

  buildAutocomplete(item: ReactiveFormControl): FormControl {
    const formControl = new FormControl(item.defaultValue, item.validators);
    this.filterList = formControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        item.valueChanges ? item.valueChanges(formControl.parent) : null;
        return item.optionList.elements(formControl.parent).filter(option => {
          const labelKey: string = option[item.optionList.labelKey] || option;
          const valueKey: string = value && typeof value === 'object' ? value[item.optionList.labelKey] : value;
          return labelKey.toLowerCase().includes(valueKey ? valueKey.toLowerCase() : '');
        });
      }),
    );
    return formControl;
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

  buildInput(item: ReactiveFormControl): FormControl {
    const formControl = new FormControl(item.defaultValue, item.validators);
    return formControl;
  }

  buildButton(item: ReactiveFormControl): FormControl {
    const formControl = new FormControl(item.label);
    return formControl;
  }

}
