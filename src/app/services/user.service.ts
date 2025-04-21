import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, tap } from 'rxjs';
import { User } from '../models/userInterface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authService = inject(AuthService)
  constructor(private http: HttpClient) { }
  url =  environment.url + 'user/'
  like(storyId : string){
    this.http.post(this.url + 'like',{storyId},{ withCredentials: true}).pipe(tap(user => this.authService.updateUser(user as User))).subscribe()
  }
  handleFollow(username:string ){
    this.http.post(this.url + 'follow',{username},{ withCredentials: true}).pipe(tap(user => this.authService.updateUser(user as User))).subscribe()
  }
  getByUsername(username:string) : Observable<User>{
   return this.http.get(`${this.url}${username}`,{ withCredentials: true}) as Observable<User>
  }
  changeImage(imgUrl : string){
    
    this.http.put(this.url+'img',{imgUrl},{ withCredentials: true}).pipe(tap(user => this.authService.updateUser(user as User))).subscribe()
  }
}
