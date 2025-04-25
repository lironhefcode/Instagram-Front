import { Component, EventEmitter, inject, Output } from '@angular/core';
import { UploadImgService } from '../../services/upload-img.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'change-profile-modal',
  imports: [],
  templateUrl: './change-profile-modal.component.html',
  styleUrl: './change-profile-modal.component.scss'
})
export class ChangeProfileModalComponent {
  imageService= inject(UploadImgService)
  userService = inject(UserService)
  @Output() close = new EventEmitter
  onClose(){
    this.close.emit(false)
  }
  onInput(event:Event){
    const el  = event.target as HTMLInputElement
    if(el.files){
      this.imageService.uploadImage(el.files[0]).subscribe((imgUrl) => {
        this.userService.changeImage(imgUrl)
        el.value = ''
        this.onClose()
      })
    }
  }
}
