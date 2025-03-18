import { Component } from '@angular/core';
import { UserProfileImageComponent } from '../user-profile-image/user-profile-image.component';

@Component({
  selector: 'side-nav',
  imports: [UserProfileImageComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

}
