import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  Signal,
} from '@angular/core'
import { UserProfileImageComponent } from '../user-profile-image/user-profile-image.component'
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'create-post-txt',
  imports: [
    UserProfileImageComponent,
    CommonModule,
    ReactiveFormsModule,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './create-post-txt.component.html',
  styleUrl: './create-post-txt.component.scss',
})
export class CreatePostTxtComponent {
  @Input() img!: string
  @Output() share = new EventEmitter()
  authService = inject(AuthService)
  loggUser$ = this.authService.currentUser$
  txt = new FormControl('')
  onClick() {
    this.share.emit(this.txt.value)
  }
}
