import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserProfileImageComponent } from '../user-profile-image/user-profile-image.component';
import { CommonModule } from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'create-post-txt',
  imports: [UserProfileImageComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './create-post-txt.component.html',
  styleUrl: './create-post-txt.component.scss'
})
export class CreatePostTxtComponent {

  txt = new FormControl('')
  @Output() share = new EventEmitter
  onClick(){
    this.share.emit(this.txt)
  }
}
