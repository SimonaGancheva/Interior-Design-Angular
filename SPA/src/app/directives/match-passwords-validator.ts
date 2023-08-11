import { FormGroup, NgModel, ValidatorFn } from '@angular/forms';

export default class Validation {
  static match(passValue: string, rePassValue: string) {
    return (formGroup: FormGroup) => {
      // const group = control as FormGroup;
      // const pass = group.get(passValue);
      // const rePass = group.get(rePassValue);

      // return pass?.value === rePass?.value
      //    null
      //   : { matchPasswordsValidator: true };

      const control = formGroup.controls[passValue];
      const checkControl = formGroup.controls[rePassValue];

      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        checkControl?.setErrors({ matching: true });
        return { matching: true };
      } else {
        checkControl?.setErrors(null);
        return null;
      }
    };
  }
}
