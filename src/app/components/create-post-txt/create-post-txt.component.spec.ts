import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CreatePostTxtComponent } from './create-post-txt.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../../models/userInterface';
import { BehaviorSubject, Observable, of } from 'rxjs';

describe('CreatePostTxtComponent', () => {
  let component: CreatePostTxtComponent;
  let fixture: ComponentFixture<CreatePostTxtComponent>;
  let authService: AuthService;
  const mockUSer :User= {
    _id: 'test',
    username: 'test',
    password: 'test',
    fullname: 'test',
    imgUrl: 'test',
    stories: [],
    following: [],
    followers: [],
    likedStoryIds: [],
    savedStoryIds: []
  }
  const authServiceMock = {
    currentUser$: new BehaviorSubject(mockUSer)
  }
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostTxtComponent,HttpClientTestingModule],
      providers: [ { provide: AuthService, useValue: authServiceMock }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostTxtComponent);
    component = fixture.componentInstance
    authService = TestBed.inject(AuthService)
    component.img = 'https://example.com/image.jpg'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show img',() => {
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toBe(component.img)
  })
  it('should emit share event', () => {
    spyOn(component.share, 'emit')
    component.txt.setValue('Test post content')
    component.onClick()
    expect(component.share.emit).toHaveBeenCalledWith('Test post content')
})
it('should call onClick when button is clicked', () => {
  const button = fixture.nativeElement.querySelector('.share')
  spyOn(component, 'onClick').and.callThrough()
  button.click()
  fixture.detectChanges()
  expect(component.onClick).toHaveBeenCalled()
})
it("should display username", () => {
  
  const usernameElement: HTMLElement = fixture.nativeElement.querySelector('.username')
  expect(usernameElement).toBeTruthy()
  expect(usernameElement.textContent).toContain(mockUSer.username)
})
it('should display user image', () => {
  const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('.user-profile-image')
  expect(imgElement).toBeTruthy()
  expect(imgElement.src).toContain(mockUSer.imgUrl)
})
})