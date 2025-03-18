import { TestBed } from '@angular/core/testing';

import { StoreisService } from './storeis.service';

describe('StoreisService', () => {
  let service: StoreisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
