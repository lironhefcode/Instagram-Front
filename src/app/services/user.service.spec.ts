import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { Inject } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';


describe('UserService', () => {
  let service: UserService;
  let httpTesting : HttpTestingController
  beforeEach(() => {
   
    TestBed.configureTestingModule({providers:[UserService,provideHttpClient(),provideHttpClientTesting()]});
  service = TestBed.inject(UserService);
   httpTesting = TestBed.inject(HttpTestingController);

  });
  afterEach(() => {
    httpTesting.verify();
  });
  it('should be created', () => { 
    expect(service).toBeTruthy();
  } )
});
