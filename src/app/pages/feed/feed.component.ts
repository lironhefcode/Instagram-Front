import { Component, DestroyRef, inject, signal } from '@angular/core';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { PostListComponent } from '../../components/post-list/post-list.component';
import { CreatePostModalComponent } from '../../components/create-post-modal/create-post-modal.component';
import { ProfileComponent } from '../profile/profile.component';
import { RouterOutlet } from '@angular/router';
import { StoreisService } from '../../services/storeis.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-feed',
  imports: [SideNavComponent,CreatePostModalComponent,RouterOutlet],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  showCreateModel = signal(false)
  storeisService = inject(StoreisService)
  private destroyRef = inject(DestroyRef)

 ngOnInit(){
  this.storeisService.loadStories().pipe(takeUntilDestroyed(this.destroyRef)).subscribe()
 }
}
