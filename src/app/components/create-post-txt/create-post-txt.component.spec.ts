import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostTxtComponent } from './create-post-txt.component';

describe('CreatePostTxtComponent', () => {
  let component: CreatePostTxtComponent;
  let fixture: ComponentFixture<CreatePostTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostTxtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
