import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/userInterface';
import { BehaviorSubject } from 'rxjs';
import { signal } from '@angular/core';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;
  let authService : AuthService
   let mockUSer : User = {
      _id: 'testid',
      username: 'testname',
      password: 'testpassword',
      fullname: 'testfullname',
      imgUrl: 'test.png',
      stories: [],
      following: [],
      followers: [],
      likedStoryIds: [],
      savedStoryIds: []
    }
   const mockAuthService = {
      currentUser$ : new BehaviorSubject<User>(mockUSer)
    }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavComponent, HttpClientTestingModule],
      providers: [{ provide: AuthService, useValue: mockAuthService }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    component.showCreateModel = signal(false)
    fixture.detectChanges();
    authService = TestBed.inject(AuthService)
   ;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onHome', () => {
    const homeIcomEl =  fixture.nativeElement.querySelector('[data-icon="home"]');
    expect(homeIcomEl).toBeTruthy()
    const onHomeSpy = spyOn(component, 'onHome').and.callThrough();
    homeIcomEl.click()
    fixture.detectChanges()
    expect(onHomeSpy).toHaveBeenCalled()
  })
  it('should call onNav', () => {
    const profileIcomEl =  fixture.nativeElement.querySelector('[data-icon="profile"]');
    expect(profileIcomEl).toBeTruthy()
    const onNav = spyOn(component, 'onNav').and.callThrough();
    profileIcomEl.click()
    fixture.detectChanges()
    expect(onNav).toHaveBeenCalled()
  })
  it('should call onCreate', () => {
    const createIcomEl =  fixture.nativeElement.querySelector('[data-icon="create"]');
    expect(createIcomEl).toBeTruthy()
    const onCreateSpy = spyOn(component, 'onCreate').and.callThrough();
    createIcomEl.click()
    fixture.detectChanges()
    expect(onCreateSpy).toHaveBeenCalled()
  })
});
