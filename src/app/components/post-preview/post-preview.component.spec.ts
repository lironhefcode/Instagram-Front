import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPreviewComponent } from './post-preview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../services/user.service';
import { User } from '../../models/userInterface';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Story } from '../../models/stroyInterface';
import { StoreisService } from '../../services/storeis.service';

describe('PostPreviewComponent', () => {
  let component: PostPreviewComponent;
  let fixture: ComponentFixture<PostPreviewComponent>;
  let authService: AuthService;
  let userService: UserService;
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
  let mockStory : Story =    {
    _id: '1',
    imgUrl: 'https://example.com/image1.jpg',
    txt: 'Story 1',
    by: {
      _id: 'user1',
      username: 'user1',
      imgUrl: 'https://example.com/user1.jpg'
    },
    likedBy: [],
    comments: [{
      id: '2',
      txt: 'comment test',
      by: {
        _id: 'user1',
        username: 'user1',
        imgUrl: 'https://example.com/user1.jpg'
      },
      likedBy: []
    }],
  }
  const mockAuthService = {
    currentUser$ : new BehaviorSubject<User>(mockUSer)
  }
  const mockUserService = {
    handleFollow : () => {},
    like : () => {},
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPreviewComponent,HttpClientTestingModule],
      providers: [{ provide: AuthService, useValue: mockAuthService },{ provide: UserService, useValue: mockUserService }, StoreisService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPreviewComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService)
    userService = TestBed.inject(UserService)
    component.story = mockStory
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should active toProfile', () => {
    const userInfoEl = fixture.nativeElement.querySelector('.name-continer')
    expect(userInfoEl).toBeTruthy()
    const toProfileSpy = spyOn(component, 'toProfile').and.callThrough()
    userInfoEl.click()
    fixture.detectChanges()
    expect(toProfileSpy).toHaveBeenCalled()
  })
  it('should use story by imgUrl',() =>{
    const userProfileImageEl = fixture.nativeElement.querySelector('.user-profile-image')
    expect(userProfileImageEl).toBeTruthy()
    expect(userProfileImageEl.src).toBe(mockStory.by.imgUrl)
  })
  it('should active onFollow',() =>{
    const followBtnEl = fixture.nativeElement.querySelector('.follow')
    expect(followBtnEl).toBeTruthy()
    const onFollowSpy = spyOn(component, 'onFollow').and.callThrough()
    const handleFollowSpy = spyOn(userService, 'handleFollow')
    followBtnEl.click()
    fixture.detectChanges() 
    expect(onFollowSpy).toHaveBeenCalled()
    expect(handleFollowSpy).toHaveBeenCalledWith(mockStory.by.username)
  })
  it('should show post img' ,() => {
    const postImgEl = fixture.nativeElement.querySelector('.post')
    expect(postImgEl).toBeTruthy()
    expect(postImgEl.src).toBe(mockStory.imgUrl)
  }) 
  it('should active onLike',() => {
    const likeBtnEl = fixture.nativeElement.querySelector('.like-btn') as HTMLButtonElement
    expect(likeBtnEl).toBeTruthy()
    const onLikeSpy = spyOn(component, 'onLike').and.callFake( () =>{
      userService.like(mockStory._id)
    })
    const likeSpy = spyOn(userService, 'like')
    likeBtnEl.click()
    fixture.detectChanges() 
    expect(onLikeSpy).toHaveBeenCalled()
    fixture.detectChanges()
    expect(likeSpy).toHaveBeenCalledWith(mockStory._id)
  })
  it('should show likedBy', () =>{
    const likesEl =  fixture.nativeElement.querySelector('.likes')
    expect(likesEl).toBeTruthy()
    expect(likesEl.innerText).toBe(mockStory.likedBy.length.toString() +' likes')
  })
  it('should show username at bottom of post', () => {
    const usernameEl = fixture.nativeElement.querySelector('.description').querySelector('.name')
    expect(usernameEl).toBeTruthy()
    expect(usernameEl.innerText).toBe(mockStory.by.username)
  })
  it('should display story txt', () =>{
    const storyTxtEl = fixture.nativeElement.querySelector('.story-txt')
    expect(storyTxtEl).toBeTruthy()
    expect(storyTxtEl.innerText).toBe(mockStory.txt)

  })
  it('should active onShowComments', () => {
    const commentModeEl = fixture.nativeElement.querySelector('.comment-mode')
    expect(commentModeEl).toBeTruthy()
    const onShowCommentsSpy = spyOn(component, 'onShowComments').and.callThrough()
    commentModeEl.click()
    fixture.detectChanges()
    expect(onShowCommentsSpy).toHaveBeenCalled()
  })
  it('should show comments', () => {
    component.showComments = true
    fixture.detectChanges()
    const commentsLEl = fixture.nativeElement.querySelector('.comments')
    expect(commentsLEl).toBeTruthy()
  })
  it('should active comment',() => {
    const addCommentEl = fixture.nativeElement.querySelector('.add-comment')
    expect(addCommentEl).toBeTruthy()
    const commentSpy = spyOn(component, 'comment').and.callThrough()
    expect(commentSpy).toHaveBeenCalled()
  })
});
