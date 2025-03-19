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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
