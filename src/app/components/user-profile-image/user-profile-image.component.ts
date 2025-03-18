import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-profile-image',
  imports: [NgStyle],
  templateUrl: './user-profile-image.component.html',
  styleUrl: './user-profile-image.component.scss',
 
})
export class UserProfileImageComponent {

  @Input() imgSrc:string = 'userProfile.png'

  @Input() size:number = 32

}
