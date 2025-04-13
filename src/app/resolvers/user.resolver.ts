import { ResolveFn } from '@angular/router';
import { User } from '../models/userInterface';
import { inject } from '@angular/core';

import { UserService } from '../services/user.service';

export const userResolver: ResolveFn<User> = (route, state) => {
 const username = route.params['username']
 console.log(username)
 const userService = inject(UserService)
 return userService.getByUsername(username)
}