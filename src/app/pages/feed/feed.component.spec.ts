import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedComponent } from './feed.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreisService } from '../../services/storeis.service';
import { CreatePostModalComponent } from '../../components/create-post-modal/create-post-modal.component';
import { RouterOutlet } from '@angular/router';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedComponent,HttpClientTestingModule,CreatePostModalComponent,RouterOutlet],
      providers: [StoreisService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
