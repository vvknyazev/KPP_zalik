import { TestBed } from '@angular/core/testing';

import { ValidatorFieldService } from './validator-field.service';

describe('ValidatorAgeService', () => {
  let service: ValidatorFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
