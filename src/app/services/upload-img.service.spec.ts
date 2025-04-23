import { TestBed } from '@angular/core/testing';

import { UploadImgService } from './upload-img.service';
import { Inject } from '@angular/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('UploadImgService', () => {
  let service: UploadImgService;
  
  let httpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({providers:[UploadImgService,provideHttpClient(),provideHttpClientTesting()]});
    service = TestBed.inject(UploadImgService);
    httpTesting = TestBed.inject(HttpTestingController);

  });
  it('should be created', () => { 
    expect(service).toBeTruthy();
  } )

 
});
