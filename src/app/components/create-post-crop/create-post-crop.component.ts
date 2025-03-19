import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'create-post-crop',
  imports: [CommonModule],
  templateUrl: './create-post-crop.component.html',
  styleUrl: './create-post-crop.component.scss'
})
export class CreatePostCropComponent {
  @Input({required:true} ) url!:string
  @Input({required:true} ) onNext!:Function
  
}
