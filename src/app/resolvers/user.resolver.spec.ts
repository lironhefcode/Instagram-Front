import { TestBed } from '@angular/core/testing';
import { RedirectCommand, ResolveFn } from '@angular/router';

import { userResolver } from './user.resolver';
import { User } from '../models/userInterface';

describe('userResolver', () => {
  const executeResolver: ResolveFn<User | RedirectCommand> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => userResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
