import { Component, signal } from '@angular/core';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { PostListComponent } from '../../components/post-list/post-list.component';
import { CreatePostModalComponent } from '../../components/create-post-modal/create-post-modal.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-feed',
  imports: [SideNavComponent,PostListComponent,CreatePostModalComponent,ProfileComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  showCreateModel = signal(false)
 
}
