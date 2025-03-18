import { Component, Input } from '@angular/core';
import { story } from '../../moudels/stroyInterface';
import { UserProfileImageComponent } from '../user-profile-image/user-profile-image.component';

@Component({
  selector: 'post-preview',
  imports: [UserProfileImageComponent],
  templateUrl: './post-preview.component.html',
  styleUrl: './post-preview.component.scss'
})
export class PostPreviewComponent {
@Input({required:true}) story!:story
}
