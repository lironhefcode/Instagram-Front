import { Component, Input } from '@angular/core';
import { comentInterface } from '../../models/comentInerface';
import { CommentPreviewComponent } from '../comment-preview/comment-preview.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'comments-list',
  imports: [CommentPreviewComponent,NgFor],
  templateUrl: './comments-list.component.html',
  styleUrl: './comments-list.component.scss'
})
export class CommentsListComponent {
@Input({required:true}) comments!: comentInterface[] 



}
