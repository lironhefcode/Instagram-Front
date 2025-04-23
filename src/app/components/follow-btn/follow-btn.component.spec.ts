import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowBtnComponent } from './follow-btn.component';

describe('FollowBtnComponent', () => {
  let component: FollowBtnComponent;
  let fixture: ComponentFixture<FollowBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit follow event on click', () => {
    spyOn(component.follow, 'emit');
    component.click();
    expect(component.follow.emit).toHaveBeenCalled();
  })
  it('should invok click method', () => {
    spyOn(component, 'click').and.callThrough();
    component.click();
    expect(component.click).toHaveBeenCalled();
  })
})
