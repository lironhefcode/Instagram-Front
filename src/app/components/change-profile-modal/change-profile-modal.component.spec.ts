import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProfileModalComponent } from './change-profile-modal.component';
import { UploadImgService } from '../../services/upload-img.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChangeProfileModalComponent', () => {
  let component: ChangeProfileModalComponent;
  let fixture: ComponentFixture<ChangeProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeProfileModalComponent,HttpClientTestingModule],
      providers: [UploadImgService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
