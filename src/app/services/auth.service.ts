import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'

import { login } from '../store/slices/user-slice'
import { User } from '../models/userInterface'
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs'
import { Router } from '@angular/router'
import { ByUserIntreface } from '../models/byUserInterface'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  url = environment.url + 'auth/'
  router = inject(Router)
  private currentUserSubject$ = new BehaviorSubject<User | null>(
    sessionStorage.getItem('user')
      ? JSON.parse(sessionStorage.getItem('user')!)
      : null
  )
  currentUser$ = this.currentUserSubject$.asObservable()

  constructor(private http: HttpClient) {}
  setUser(user:User){
    sessionStorage.setItem('user', JSON.stringify(user))
    this.currentUserSubject$.next(user)
    this.router.navigate(['/feed'])
  }
  login(creds: { username: string; password: string }) {
    return this.http
      .post<User>(this.url + 'login', creds, {
        withCredentials: true,
      })
      .pipe(
        tap((user: User) => {
          this.setUser(user)
        })
      )
      .subscribe(() => {})
  }
  signup(creds: { username: string; password: string; fullname: string }) {
    this.http.post<User>(this.url + 'signup', creds).pipe(
        tap((user: User) => {
         this.setUser(user)
        })
      )
      .subscribe(() => {})
  }
  updateUser(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user))
    this.currentUserSubject$.next({ ...user })
  }
  getMiniUser() {
    return this.currentUser$.pipe(
      map((user) => {
        return {
          _id: user!._id,
          username: user!.username,
          imgUrl: user!.imgUrl,
        }
      })
    )
  }
}
