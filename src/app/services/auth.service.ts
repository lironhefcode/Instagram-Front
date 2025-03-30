import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { injectDispatch } from '@reduxjs/angular-redux';
import { login } from '../store/slices/user-slice';
import { User } from '../models/userInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    dispatch = injectDispatch()
  url = 'http://localhost:3000/api/auth/'
  constructor(private http: HttpClient) { }


  login(creds:{username:string,password:string}){
      this.http.post<User>(this.url+'login',creds).subscribe( (user :User) =>  this.dispatch(login(user)))
  }
  signup(creds:{username:string,password:string,fullname:string}){
    console.log('creds' ,creds)
    this.http.post<User>(this.url+'signup',creds).subscribe( (user :User) =>  this.dispatch(login(user)))
  }
}
