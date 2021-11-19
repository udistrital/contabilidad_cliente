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
    if (this.data) {
      const [parent, value] = [this.control.parent,  this.control.value];
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
      map(value => item.optionList.elements().filter(option => {
        const labelKey: string = option[item.optionList.labelKey] || option;
        return labelKey.toLowerCase().includes(value.toLowerCase());
      })),
    );
    return formControl;
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
