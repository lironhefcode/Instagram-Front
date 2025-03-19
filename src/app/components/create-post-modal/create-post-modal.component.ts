import { Component, Input, WritableSignal } from '@angular/core';
import { CreatePostImageInputComponent } from '../create-post-image-input/create-post-image-input.component';
import { CreatePostCropComponent } from '../create-post-crop/create-post-crop.component';
import { CreatePostTxtComponent } from '../create-post-txt/create-post-txt.component';

@Component({
  selector: 'create-post-modal',
  imports: [CreatePostImageInputComponent,CreatePostCropComponent,CreatePostTxtComponent],
  templateUrl: './create-post-modal.component.html',
  styleUrl: './create-post-modal.component.scss'
})
export class CreatePostModalComponent {
  @Input({required:true}) showCreateModel!:WritableSignal<boolean>
}
