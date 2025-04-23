import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPreviewComponent } from './post-preview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../../services/user.service';

describe('PostPreviewComponent', () => {
  let component: PostPreviewComponent;
  let fixture: ComponentFixture<PostPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPreviewComponent,HttpClientTestingModule],
      providers: [UserService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
