import { AbstractControl, ValidationErrors } from "@angular/forms";

export class SameValueValidator {

  static isSameValue(control: AbstractControl, secondControl: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const secondValue = secondControl.value
    if (value === secondValue) {
      return { isTheSameValue: true };
    }
    return null;
  }
}
