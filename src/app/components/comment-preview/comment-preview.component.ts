import { Component, Input } from '@angular/core';
import { comentInterface } from '../../models/comentInerface';
import { UserProfileImageComponent } from '../user-profile-image/user-profile-image.component';

@Component({
  selector: 'comment-preview',
  imports: [UserProfileImageComponent],
  templateUrl: './comment-preview.component.html',
  styleUrl: './comment-preview.component.scss'
})
export class CommentPreviewComponent {
@Input({required:true}) comment!:comentInterface

}