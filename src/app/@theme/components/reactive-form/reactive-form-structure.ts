import { ValidatorFn } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material';

export interface ReactiveFormStructure {
    cols?: number;
    controls: (ReactiveFormGroup | ReactiveFormControl)[];
    appareance ?: MatFormFieldAppearance;
    validators ?: ValidatorFn[];
}

export interface ReactiveFormGroup {
    class ?: string;
    title ?: string;
    key: string;
    validators ?: ValidatorFn[];
    appareance ?: MatFormFieldAppearance;
    controls: (ReactiveFormGroup | ReactiveFormControl)[];
}

export interface ReactiveFormControl {
    type: FormControlType;
    defaultValue ?: string;
    class ?: string;
    label ?: string;
    key: string;
    validators ?: ValidatorFn[];
    appareance ?: MatFormFieldAppearance;
    optionList ?: OptionList;
    controls ?: null;
    errorMsg ?: string;
    placeholder ?: string;
    inputType ?: FormControlInputType;
    hintMsg ?: string;
    buttonAction ?: (FormGroup) => void;
    disabled ?: (FormGroup) => boolean;
    valueChanges ?: (FormGroup) => void;
    prefix?: string;
}

export type FormControlType = 'autocomplete' | 'input' | 'date' | 'checkbox' | 'radio' | 'select' | 'button';

export type FormControlInputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';

export interface OptionList {
    elements: (parent ?: any) => Array < any > ;
    labelKey?: string;
    idKey?: string;
    valueid?: boolean;
}

export function isGroup(object: any): object is ReactiveFormGroup {
    return !!object.controls;
}
