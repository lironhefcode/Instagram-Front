import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostModalComponent } from './create-post-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreisService } from '../../services/storeis.service';
import { CreatePostImageInputComponent } from '../create-post-image-input/create-post-image-input.component';
import { By } from '@angular/platform-browser';
import { CreatePostTxtComponent } from '../create-post-txt/create-post-txt.component';
import { CreatePostCropComponent } from '../create-post-crop/create-post-crop.component';
import { signal } from '@angular/core';

describe('CreatePostModalComponent', () => {
  let component: CreatePostModalComponent;
  let fixture: ComponentFixture<CreatePostModalComponent>;
  let storeisService : StoreisService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostModalComponent ,HttpClientTestingModule,CreatePostImageInputComponent,CreatePostCropComponent,
          CreatePostTxtComponent,],
      providers: [StoreisService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    storeisService = fixture.debugElement.injector.get(StoreisService);
    component.showCreateModel = signal(true)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onShare method', () => {
    component.mode = 'txt'
    component.newPost = signal(storeisService.getEmptyStorty())
    fixture.detectChanges()
    const onShareSpy = spyOn(component, 'onShare').and.callFake(((txt: string) => {
      component.newPost.update((prevState) => ({ ...prevState, txt }))
    }))
    const txtEl = fixture.debugElement.query(By.directive(CreatePostTxtComponent)).componentInstance;
   txtEl.share.emit('test')
    fixture.detectChanges()
    expect(onShareSpy).toHaveBeenCalled()
   
    expect(component.newPost().txt).toBe('test')
  })
  it('should call close method', () => {
    const closeSpy = spyOn(component, 'close').and.callThrough()
    const closeBtn = fixture.nativeElement.querySelector('.close')
    closeBtn.click()
    fixture.detectChanges()
    expect(closeSpy).toHaveBeenCalled();
    expect(component.showCreateModel()).toBe(false)
  })
  it('should call updateImg method', () => {
    const inputEl = fixture.debugElement.query(By.directive(CreatePostImageInputComponent)).componentInstance;
    const imgUrl = 'test.jpg';
    const updateImgSpy = spyOn(component, 'updateImg');
    inputEl.updateImg.emit(imgUrl);
    fixture.detectChanges();
    expect(updateImgSpy).toHaveBeenCalledWith(imgUrl);
  })
  it('should call onNext method , and change mode to txt', () => {
    const onNextSpy = spyOn(component, 'onNext').and.callThrough()
  component.mode = 'crop'
  fixture.detectChanges()    
  const cropEl = fixture.debugElement.query(By.directive(CreatePostCropComponent))
  const nextBtn = cropEl.nativeElement.querySelector('.next')
  nextBtn.click()
  fixture.detectChanges()
  expect(onNextSpy).toHaveBeenCalled()

  expect(component.mode).toEqual('txt')
  })
});
