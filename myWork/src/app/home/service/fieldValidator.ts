import {AbstractControl, ValidatorFn} from "@angular/forms";
import {ValidatorFieldService} from "./validator-field.service";

export function fieldValidator(): ValidatorFn {
  return (
    control: AbstractControl
  ): {[key: string]: boolean} | null => {
    let validator = new ValidatorFieldService()
    let valid = !control.value || validator.validator_field(control.value)
    return valid ? null : {credits: true}
  }
}
