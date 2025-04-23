import { TestBed } from '@angular/core/testing';

import { StoreisService } from './storeis.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StoreisService', () => {

  let httpClient :  HttpClient
  let service: StoreisService;
  let httpTesting : HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule],providers: [StoreisService], });
     service = TestBed.inject(StoreisService)
     httpClient = TestBed.inject(HttpClient)
     httpTesting = TestBed.inject(HttpTestingController)

  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
