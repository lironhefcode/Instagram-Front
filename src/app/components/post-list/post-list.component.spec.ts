import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreisService } from '../../services/storeis.service';
import { Story } from '../../models/stroyInterface';
import { BehaviorSubject, Observable, of } from 'rxjs';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let storiesService: StoreisService;
  let mockStories:Story[] = [
    {
      _id: '1',
      imgUrl: 'https://example.com/image1.jpg',
      txt: 'Story 1',
      by: {
        _id: 'user1',
        username: 'user1',
       
        imgUrl: 'https://example.com/user1.jpg'
      },
      likedBy: [],
      comments: [],
    },
    {
      _id: '2',
      imgUrl: 'https://example.com/image2.jpg',
      txt: 'Story 2',
      by: {
        _id: 'user2',
        username: 'user2',
       
        imgUrl: 'https://example.com/user2.jpg'
      },
      likedBy: [],
      comments: [],
    }
  ]
  const storiesServiceMock = {
    stories$: new BehaviorSubject<Story[]>(mockStories),
    loadStories: () =>of(mockStories)
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListComponent,HttpClientTestingModule],
      providers: [{ provide: StoreisService, useValue: storiesServiceMock }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    storiesService = TestBed.inject(StoreisService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call loadStories on scroll', () => {
    const loadStoriesSpy = spyOn(component.storiesService, 'loadStories').and.callThrough();
    const mockEvent = { target: { scrollTop: 0, clientHeight: 100, scrollHeight: 200 } } as unknown as Event;
    component.onScroll(mockEvent.target as HTMLElement);
    fixture.detectChanges();
    expect(loadStoriesSpy).toHaveBeenCalled();
  })
  it('should display the same number of stories as the service', () => {
    const liElements = fixture.nativeElement.querySelectorAll('li')
    expect(liElements.length).toBe(mockStories.length)
  })
});
