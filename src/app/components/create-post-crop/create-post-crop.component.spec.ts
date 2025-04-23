import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostCropComponent } from './create-post-crop.component';

describe('CreatePostCropComponent', () => {
  let component: CreatePostCropComponent;
  let fixture: ComponentFixture<CreatePostCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostCropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostCropComponent);
    component = fixture.componentInstance;
    component.url = 'https://example.com/image.jpg';
    component.onNext = () => {}; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have url and onNext as required inputs', () => {
    const urlInput = component['url']
    const onNextInput = component['onNext']
    expect(urlInput).toBeDefined()
    expect(onNextInput).toBeDefined()
  })
  it('should call onNext when next button is clicked', () => {
    const onNextSpy = spyOn(component, 'onNext')
    const nextButton = fixture.nativeElement.querySelector('.next');
    nextButton.click()
    expect(onNextSpy).toHaveBeenCalled()
  })
  it('should display the image correctly', () => {
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toBe(component.url);
  })
});
