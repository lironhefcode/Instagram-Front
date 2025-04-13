import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { Story } from '../../models/stroyInterface';
import { UserProfileImageComponent } from '../user-profile-image/user-profile-image.component';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { IslikedPipe } from '../../pipes/isliked.pipe';
import { Observable } from 'rxjs';
import { User } from '../../models/userInterface';
import { ByUserIntreface } from '../../models/byUserInterface';
import { IsfollowingPipe } from '../../pipes/isfollowing.pipe';

@Component({
  selector: 'post-preview',
  imports: [UserProfileImageComponent, AsyncPipe, IslikedPipe, NgIf ,IsfollowingPipe],
  templateUrl: './post-preview.component.html',
  styleUrl: './post-preview.component.scss'
})
export class PostPreviewComponent {
  @Input({ required: true }) story!: Story
  userService = inject(UserService)
  authService = inject(AuthService)
  curUser$ = this.authService.currentUser$ as Observable<User>
  @ViewChild('like') likeBtn!: ElementRef
  onLike() {
    let sub
    if (this.likeBtn.nativeElement.classList.contains('red')) {
      sub = this.authService.getMiniUser().subscribe((miniUser) => this.story = { ...this.story, likedBy: this.story.likedBy.filter(user => user._id !== miniUser._id) })
    } else {

      sub = this.authService.getMiniUser().subscribe((miniUser) => this.story = { ...this.story, likedBy: [...this.story.likedBy, miniUser] })
    }
    sub.unsubscribe()
    this.userService.like(this.story._id!)
  }

  onFollow(){
    this.userService.follow(this.story.by.username)
  }
}
