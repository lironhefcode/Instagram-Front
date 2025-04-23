import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostImageInputComponent } from './create-post-image-input.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UploadImgService } from '../../services/upload-img.service';
import { of } from 'rxjs';

describe('CreatePostImageInputComponent', () => {
  let component: CreatePostImageInputComponent
  let fixture: ComponentFixture<CreatePostImageInputComponent>;
  let uploadService: UploadImgService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostImageInputComponent,HttpClientTestingModule],
      providers: [UploadImgService],
    })
    .compileComponents();
    uploadService = TestBed.inject(UploadImgService)
    fixture = TestBed.createComponent(CreatePostImageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onInput method and Emit', () => {  
    const file = new File([''], 'test.png', { type: 'image/png' })
    const mockEvent = {
      target: { files: [file] },
    } as any
    const mockResponse = 'test-url.jpg' 
    spyOn(uploadService, 'uploadImage').and.returnValue(of(mockResponse))
   spyOn(component.updateImg, 'emit')
   component.onInput(mockEvent )
   expect(uploadService.uploadImage).toHaveBeenCalledWith(file)
   expect(component.updateImg.emit).toHaveBeenCalledWith(mockResponse)
  } )
  
})
