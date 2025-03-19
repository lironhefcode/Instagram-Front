import { Component, Input, WritableSignal } from '@angular/core';
import { CreatePostImageInputComponent } from '../create-post-image-input/create-post-image-input.component';

@Component({
  selector: 'create-post-modal',
  imports: [CreatePostImageInputComponent],
  templateUrl: './create-post-modal.component.html',
  styleUrl: './create-post-modal.component.scss'
})
export class CreatePostModalComponent {
  @Input({required:true}) showCreateModel!:WritableSignal<boolean>
}
