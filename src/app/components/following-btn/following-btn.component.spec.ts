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
  })
  it('should emit unFollow event on button click', () => {  
    spyOn(component.unFollow, 'emit')
    spyOn(component, 'onClick').and.callThrough()
    const button = fixture.nativeElement.querySelector('button')
    button.click();
    fixture.detectChanges()
    expect(component.onClick).toHaveBeenCalled()
    expect(component.unFollow.emit).toHaveBeenCalled();
  })
});
