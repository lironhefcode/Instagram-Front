import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostTxtComponent } from './create-post-txt.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreatePostTxtComponent', () => {
  let component: CreatePostTxtComponent;
  let fixture: ComponentFixture<CreatePostTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostTxtComponent,HttpClientTestingModule],
      providers: [AuthService],
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
