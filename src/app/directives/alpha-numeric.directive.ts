import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[poafAlphaNumeric][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AlphaNumericDirective,
    multi: true
  }],
})
export class AlphaNumericDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && !/^[a-zA-Z0-9]*$/.test(control.value)) {
      return { 'alphaNumeric': true };
    }
    return null; // return null if validation is passed.
  }
}
