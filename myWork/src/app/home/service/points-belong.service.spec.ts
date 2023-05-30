import { TestBed } from '@angular/core/testing';

import { PointsBelongService } from './points-belong.service';

describe('PointsBelongService', () => {
  let service: PointsBelongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointsBelongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
