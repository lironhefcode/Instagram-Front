import { Component } from '@angular/core';
import { UserProfileImageComponent } from '../../components/user-profile-image/user-profile-image.component';

@Component({
  selector: 'app-profile',
  imports: [UserProfileImageComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
