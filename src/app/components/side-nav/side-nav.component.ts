import { Component, Input, WritableSignal } from '@angular/core';
import { UserProfileImageComponent } from '../user-profile-image/user-profile-image.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'side-nav',
  imports: [UserProfileImageComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  @Input({required:true}) showCreateModel!:WritableSignal<boolean>
  onCreate(){
    this.showCreateModel.set(true)
    
  } 

}
