import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorFieldService {
  validator_field(value: number) {
    if (value <= 0 || value > 100) {
      return false;
    } else return true;
  }

  constructor() {
  }
}
