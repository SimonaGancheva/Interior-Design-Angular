import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import Validation from './match-passwords-validator';

@Directive({
  selector: '[appPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordDirective,
      multi: true,
    },
  ],
})
export class PasswordDirective implements Validator {
  @Input() appPassword: string[] = [];

  // validator: ValidatorFn = () => null;
  // constructor() {}

  validate(formGroup: FormGroup): ValidationErrors | null {
    return Validation.match(
      this.appPassword[0],
      this.appPassword[1]
    )(formGroup);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   const currPassChanges = changes['appPassword'];
  //   const currRePassChanges = changes['appRepassword'];
  //   if (currRePassChanges) {
  //     this.validator = matchPasswordsValidator(
  //       currPassChanges.currentValue,
  //       currRePassChanges.currentValue
  //     );
  //   }
  // }
}
