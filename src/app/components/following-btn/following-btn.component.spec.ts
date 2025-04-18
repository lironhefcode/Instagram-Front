import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingBtnComponent } from './following-btn.component';

describe('FollowingBtnComponent', () => {
  let component: FollowingBtnComponent;
  let fixture: ComponentFixture<FollowingBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowingBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
