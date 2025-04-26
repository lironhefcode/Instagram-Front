import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreisService } from '../../services/storeis.service';
import { CreatePostModalComponent } from '../../components/create-post-modal/create-post-modal.component';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedComponent,HttpClientTestingModule,CreatePostModalComponent,RouterOutlet],
      providers: [StoreisService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    component.showCreateModel = signal(false)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
  it('should disoplay create post modal', () => {
    component.showCreateModel.set(true)
    fixture.detectChanges()
    const modal = fixture.nativeElement.querySelector('create-post-modal')
    expect(modal).toBeTruthy()
  })
  it('should ont display create post modal', () => {
    const modal = fixture.nativeElement.querySelector('create-post-modal') as HTMLElement
    expect(modal.hidden).toBe(true)
  })
  it('should load stories on init', () => {
    const storeisService = TestBed.inject(StoreisService)
    const loadStoriesSpy = spyOn(storeisService, 'loadStories').and.callThrough()
    component.ngOnInit()
    expect(loadStoriesSpy).toHaveBeenCalled()
  })

});
