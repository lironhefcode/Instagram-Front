import { Component, ElementRef, HostListener, inject, viewChild } from '@angular/core';
import { injectSelector } from '@reduxjs/angular-redux';
import { selectStories } from '../../store/slices/sotries-slice';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';

import { StoreisService } from '../../services/storeis.service';
import { PostPreviewComponent } from '../post-preview/post-preview.component';
import { tap } from 'rxjs';

@Component({
  selector: 'post-list',
  imports: [CommonModule, PostPreviewComponent, AsyncPipe, NgIf, ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {

  storiesService = inject(StoreisService)
  stories$ = this.storiesService.stories$
  loading = false


  constructor(private postList: ElementRef) {
  }
  maxScroll = 0;
  @HostListener('scroll', ['$event.target'])
  onScroll(target: HTMLElement) {

    if (this.loading) return
    const scrollPosition = target.scrollTop + target.clientHeight;
    const scrollHeight = target.scrollHeight;

    if (scrollPosition >= scrollHeight - 100) {
      this.loading = true

      this.storiesService.loadStories().subscribe({
        next: () => {
          this.loading = false

        }
      })

    }
  }
}

