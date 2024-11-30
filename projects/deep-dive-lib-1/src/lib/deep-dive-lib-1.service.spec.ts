import { TestBed } from '@angular/core/testing';

import { DeepDiveLib1Service } from './deep-dive-lib-1.service';

describe('DeepDiveLib1Service', () => {
  let service: DeepDiveLib1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeepDiveLib1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
