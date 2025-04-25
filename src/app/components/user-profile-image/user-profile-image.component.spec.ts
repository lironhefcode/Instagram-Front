import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileImageComponent } from './user-profile-image.component';

describe('UserProfileImageComponent', () => {
  let component: UserProfileImageComponent;
  let fixture: ComponentFixture<UserProfileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the input image', () =>{
    component.imgSrc = 'test.png'
    fixture.detectChanges()
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img')
    expect(imgElement.src).toContain('test.png')
  })
  it('should set the size of the image', () =>{
    component.size = 64
    fixture.detectChanges()
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img')
    expect(imgElement.style.width).toBe('64px')
    expect(imgElement.style.height).toBe('64px')
  })
});
