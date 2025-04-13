import { inject, Pipe, PipeTransform } from '@angular/core';
import { Story } from '../models/stroyInterface';
import { AuthService } from '../services/auth.service';
import { User } from '../models/userInterface';

@Pipe({
  name: 'isliked'
})
export class IslikedPipe implements PipeTransform {
  
  transform(loggedUser:User,story: Story, ...args: unknown[]): unknown {
    let isLiked: boolean
    isLiked = story.likedBy.some(user => user._id === loggedUser._id ) ;
    console.log(isLiked)
    return isLiked
  }

}
