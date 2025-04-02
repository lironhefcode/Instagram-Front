import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { injectDispatch } from '@reduxjs/angular-redux';
import { login } from '../store/slices/user-slice';
import { User } from '../models/userInterface';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    dispatch = injectDispatch()
  url = 'http://localhost:3000/api/auth/'
  router = inject(Router)
  private currentUserSubject$ = new BehaviorSubject<User >(
    sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')!) : this._emptyUser()
  );
  currentUser$ = this.currentUserSubject$.asObservable();

  constructor(private http: HttpClient) {}


  login(creds:{username:string,password:string}){
      return this.http.post<User>(this.url+'login',creds).pipe( tap((user :User) => {
        
        sessionStorage.setItem('user',JSON.stringify(user))

        this.currentUserSubject$.next(user)
        
        this.router.navigate([''])
      } ),
    ).subscribe(() => { })
  }
  signup(creds:{username:string,password:string,fullname:string}){
    console.log('creds' ,creds)
    this.http.post<User>(this.url+'signup',creds).pipe( tap((user :User) => {
      sessionStorage.setItem('user',JSON.stringify(user))
      this.currentUserSubject$.next(user)
    } )).subscribe(() => { })
  }
  _emptyUser(): User{
   return {
        _id:'',
      username: '',
      password:'',
      fullname: '',
      imgUrl:'' ,
      following: [],
      followers:[] ,
      likedStoryIds: [], 
      savedStoryIds: [],
    }
  }
}
