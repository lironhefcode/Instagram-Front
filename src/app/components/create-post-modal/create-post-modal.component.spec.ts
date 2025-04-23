import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostModalComponent } from './create-post-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreisService } from '../../services/storeis.service';

describe('CreatePostModalComponent', () => {
  let component: CreatePostModalComponent;
  let fixture: ComponentFixture<CreatePostModalComponent>;
  let storeisService : StoreisService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostModalComponent ,HttpClientTestingModule],
      providers: [StoreisService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    storeisService = fixture.debugElement.injector.get(StoreisService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
