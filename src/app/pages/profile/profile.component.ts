import { Component, inject } from '@angular/core'
import { UserProfileImageComponent } from '../../components/user-profile-image/user-profile-image.component'
import { ActivatedRoute } from '@angular/router'
import { User } from '../../models/userInterface'
import { combineLatest, map, Observable, switchMap, tap } from 'rxjs'
import { AsyncPipe, NgIf } from '@angular/common'
import { ChangeProfileModalComponent } from '../../components/change-profile-modal/change-profile-modal.component'
import { UserService } from '../../services/user.service'
import { AuthService } from '../../services/auth.service'
import { FollowBtnComponent } from '../../components/follow-btn/follow-btn.component'
import { FollowingBtnComponent } from '../../components/following-btn/following-btn.component'

@Component({
  selector: 'app-profile',
  imports: [
    UserProfileImageComponent,
    NgIf,
    AsyncPipe,
    ChangeProfileModalComponent,
    FollowBtnComponent,
    FollowingBtnComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  private route = inject(ActivatedRoute)
  authService = inject(AuthService)
  userService = inject(UserService)
  isLoged!: boolean
  isFollowing!: boolean
  user$: Observable<User> = this.authService.currentUser$.pipe(
    map((loggedUser) => loggedUser as User),
    switchMap((loggedUser) =>
      this.route.data.pipe(
        map((data) => data['user']),
        map((routeUser) => {
          if (loggedUser?._id === routeUser._id) {
            this.isLoged = true
            this.isFollowing = loggedUser.following.some(
              (user) => user._id === routeUser._id
            )
            return loggedUser
          } else {
            this.isLoged = false
            return routeUser
          }
        })
      )
    )
  )
  handleFollow(username: string) {
    this.userService.handleFollow(username)
  }
  showChangePhoto = false
}
