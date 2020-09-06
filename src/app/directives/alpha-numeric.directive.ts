import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS } from '@angular/forms';
import { AbstractControl } from '@ngneat/reactive-forms';

@Directive({
  selector: '[poafAlphaNumeric][ngModel],[poafAlphaNumeric][formControlName],[poafAlphaNumeric][formControl]',
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
