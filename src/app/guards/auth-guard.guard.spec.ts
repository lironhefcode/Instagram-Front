import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterState, RouterStateSnapshot } from '@angular/router';

import { authGuard } from './auth-guard.guard';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { User } from '../models/userInterface';
describe('authGuardGuard', () => {
  let activatedRoute : ActivatedRoute
  const mockRouter = jasmine.createSpyObj('Router', ['createUrlTree','navigate'])

  const mockUser : User = {
    _id: 'testId',
    username: 'testUser',
    password: 'testPassword',
    fullname: 'testFullname',
    imgUrl: 'test.png',
    stories: [],
    following: [],
    followers: [],
    likedStoryIds: [],
    savedStoryIds: []
  }
  const mockAuthService ={
    currentUser$: new BehaviorSubject<User | null>(mockUser)
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: { snapshot: {} } },
        { provide: AuthService, useValue: mockAuthService },
      ],
    });

    activatedRoute = TestBed.inject(ActivatedRoute);
    mockRouter.createUrlTree.calls.reset();
  });

  it('should return true when user is logged in', fakeAsync(() => {
    mockAuthService.currentUser$.next(mockUser);
    tick();
    const result = TestBed.runInInjectionContext(() => authGuard(null!, null!)) as Observable<boolean>;
    let guardOutput = null;
    result.subscribe((res) => (guardOutput = res));
    tick();
    expect(guardOutput).toBeTrue();
  }));

  it('should return false when user is not logged in', fakeAsync(() => {
    mockAuthService.currentUser$.next(null)
    tick();
    const result = TestBed.runInInjectionContext(() => authGuard(null!, null!)) as Observable<boolean>;
    let guardOutput = null
    result.subscribe((res) => (guardOutput = res))
    tick()
    expect(guardOutput).toBeFalse();
  }))

  
})  

