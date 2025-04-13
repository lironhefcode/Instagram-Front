import { Component, inject } from '@angular/core';
import { UserProfileImageComponent } from '../../components/user-profile-image/user-profile-image.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/userInterface';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeProfileModalComponent } from '../../components/change-profile-modal/change-profile-modal.component';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [UserProfileImageComponent,NgIf,AsyncPipe,ChangeProfileModalComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  private route = inject(ActivatedRoute)
  authService = inject(AuthService)
  user$  = this.authService.currentUser$.pipe(
    switchMap(loggedUser => 
      this.route.data.pipe(
        map(data => data['user']),
        map(routeUser => 
          loggedUser!._id === routeUser._id ? loggedUser : routeUser
        )
      )
    )
  )
  showChangePhoto = false
  
}
