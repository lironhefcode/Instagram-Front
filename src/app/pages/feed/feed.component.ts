import { Component } from '@angular/core';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { PostListComponent } from '../../components/post-list/post-list.component';

@Component({
  selector: 'app-feed',
  imports: [SideNavComponent,PostListComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

}
