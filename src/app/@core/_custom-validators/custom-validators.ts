import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

function customRequired(msg: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        return Validators.required(control) ? {
            required: true,
            msg
        } : null;
    };
}

function customObject(msg?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return control.value && typeof control.value !== 'object' ? {
            customObject: true,
            msg
        } : null;
    };
}

const CustomValidators = {
    customRequired,
    customObject
};

export {
    CustomValidators
};
