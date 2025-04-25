import { Component, inject, Input, signal, WritableSignal } from '@angular/core'
import { CreatePostImageInputComponent } from '../create-post-image-input/create-post-image-input.component'
import { CreatePostCropComponent } from '../create-post-crop/create-post-crop.component'
import { CreatePostTxtComponent } from '../create-post-txt/create-post-txt.component'
import { StoreisService } from '../../services/storeis.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'create-post-modal',
  imports: [
    CreatePostImageInputComponent,
    CreatePostCropComponent,
    CreatePostTxtComponent,
    CommonModule,
  ],
  templateUrl: './create-post-modal.component.html',
  styleUrl: './create-post-modal.component.scss',
})
export class CreatePostModalComponent {
  storyService = inject(StoreisService)
  @Input({ required: true }) showCreateModel!: WritableSignal<boolean>
  mode = 'input'
  newPost = signal(this.storyService.getEmptyStorty())

  updateImg = (imgUrl: string) => {
    this.newPost.update((prevState) => ({ ...prevState, imgUrl }))
    this.mode = 'crop'
  }
  onNext = () => {
    this.mode = 'txt'
  }
  onShare = (txt: string) => {
    this.newPost.update((prevState) => ({ ...prevState, txt }))
    this.storyService.addStory(this.newPost())
    this.mode = 'input'

    this.close()
  }
  close() {
    this.mode = 'input'
    this.showCreateModel.set(false)
    this.newPost.set(this.storyService.getEmptyStorty())
  }
}
