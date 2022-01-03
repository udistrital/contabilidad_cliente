import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

function customRequired(msg: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        return Validators.required(control) ? {
            required: true,
            msg
        } : null;
    };
}

const CustomValidators = {
    customRequired
};

export {
    CustomValidators
};
