import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostImageInputComponent } from './create-post-image-input.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UploadImgService } from '../../services/upload-img.service';

describe('CreatePostImageInputComponent', () => {
  let component: CreatePostImageInputComponent;
  let fixture: ComponentFixture<CreatePostImageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostImageInputComponent,HttpClientTestingModule],
      providers: [UploadImgService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostImageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
