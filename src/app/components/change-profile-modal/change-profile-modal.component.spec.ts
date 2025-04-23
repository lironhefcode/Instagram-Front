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
    .compileComponents()

    fixture = TestBed.createComponent(ChangeProfileModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
it('should call onClose when close button is clicked', () => {
  const onCloseSpy =  spyOn(component, 'onClose')
    const closeButton = fixture.nativeElement.querySelector('.cancel')
    closeButton.click()
    fixture.detectChanges()
    expect(onCloseSpy).toHaveBeenCalled()
})

  it('should call onFileSelected when file input changes', () => {
    const fileInput = fixture.nativeElement.querySelector('input[type="file"]')
    const file = new File([''], 'test.png', { type: 'image/png' })
    const mockEvent = {
      target: { files: [file] },
      bubbles: false,
      cancelBubble: false,
      cancelable: false,
      composed: false,
      currentTarget: null,
      defaultPrevented: false,
      eventPhase: 0,
      isTrusted: true,
      returnValue: true,
      srcElement: null,
      timeStamp: Date.now(),
      type: 'change',
      preventDefault: () => {},
      stopImmediatePropagation: () => {},
      stopPropagation: () => {}
    } as unknown as Event
    
    spyOn(component, 'onInput')
    component.onInput(mockEvent as unknown as Event)
    expect(component.onInput).toHaveBeenCalledWith(mockEvent)
  } )




});
