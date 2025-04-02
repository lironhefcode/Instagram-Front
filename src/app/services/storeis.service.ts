import { Injectable } from '@angular/core';
import { Story } from '../models/stroyInterface';
import { injectDispatch } from '@reduxjs/angular-redux';
import { load } from '../store/slices/sotries-slice';
import { HttpClient } from '@angular/common/http';
import { newStory } from '../models/newStoryInterface';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreisService {
  private currentStoriesSubject$ = new BehaviorSubject<Story[] | null>(null)
          stories$ = this.currentStoriesSubject$.asObservable()
  constructor(private http: HttpClient) { } 
    dispatch = injectDispatch()
    url = 'http://localhost:3000/api/story/'
    loadStories(){
      this.http.get<Story[]>(this.url).pipe(
        tap( (stories:Story[]) =>{
          this.currentStoriesSubject$.next(stories)
        })
      )
     
    }
    getEmptyStorty():Story{
      const emptyStory:Story =  {
       
        txt: '',
        imgUrl: '',
        by: {
          _id: 'a',
          fullname: '',
          imgUrl: '',
        },
        comments: [],
        likedBy: [],
      }
      console.log(emptyStory)
      return emptyStory
     
    }
    addStory(story:newStory){
      // story.by = logedUser
      this.http.post(this.url,story)
    }
 
}
