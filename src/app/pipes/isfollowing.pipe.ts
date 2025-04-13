import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/userInterface';

@Pipe({
  name: 'isfollowing'
})
export class IsfollowingPipe implements PipeTransform {

  transform(curUser: User,userToFollowId:string, ...args: unknown[]) {

    return curUser.following.some(user => user._id === userToFollowId)? 'none': 'block';
  }

}
