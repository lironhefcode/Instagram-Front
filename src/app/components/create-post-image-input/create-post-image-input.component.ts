import { Component, inject, Input, WritableSignal } from '@angular/core';
import { UploadImgService } from '../../services/upload-img.service';
import { Story } from '../../models/stroyInterface';

@Component({
  selector: 'create-post-image-input',
  imports: [],
  templateUrl: './create-post-image-input.component.html',
  styleUrl: './create-post-image-input.component.scss'
})
export class CreatePostImageInputComponent {
  imageService= inject(UploadImgService)
  @Input({required:true} ) updateImg!:Function
 
  
  url= ''
  onInput(ev:Event){
    const el = ev.target as HTMLInputElement
    if(el.files){
      
       this.imageService.uploadImage(el.files[0]).subscribe(res => {
        this.updateImg(res)
       })
      
    }
  }
}
