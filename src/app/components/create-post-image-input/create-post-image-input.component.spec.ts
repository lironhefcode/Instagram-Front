import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostImageInputComponent } from './create-post-image-input.component';

describe('CreatePostImageInputComponent', () => {
  let component: CreatePostImageInputComponent;
  let fixture: ComponentFixture<CreatePostImageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostImageInputComponent]
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
