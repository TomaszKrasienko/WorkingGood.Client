import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function passwordStrengthValidator(): ValidatorFn{
  return (control:AbstractControl) : ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const hasSpecialCharacter = /[@$!%*?&]+/.test(value);

    const isLongerThan6 = value.length > 6;

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialCharacter && isLongerThan6;

    return !passwordValid ? {passwordStrength:true}: null;
  }
}
