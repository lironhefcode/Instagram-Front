import { inject, Injectable } from '@angular/core'
import { Story } from '../models/stroyInterface'
import { injectDispatch } from '@reduxjs/angular-redux'
import { load } from '../store/slices/sotries-slice'
import { HttpClient } from '@angular/common/http'
import { newStory } from '../models/newStoryInterface'
import { BehaviorSubject, map, switchMap, tap } from 'rxjs'
import { AuthService } from './auth.service'
import { User } from '../models/userInterface'
import { comentInterface } from '../models/comentInerface'

@Injectable({
  providedIn: 'root',
})
export class StoreisService {
  authService = inject(AuthService)
  private currentStoriesSubject$ = new BehaviorSubject<Story[] | null>(null)
  stories$ = this.currentStoriesSubject$.asObservable()
  constructor(private http: HttpClient) {}
  dispatch = injectDispatch()
  url = 'http://localhost:3000/api/story/'

  loadStories() {
    return this.http.get<Story[]>(this.url, { withCredentials: true }).pipe(
      tap((stories: Story[]) => {
        if (this.currentStoriesSubject$.value !== null) {
          stories = [...this.currentStoriesSubject$.value, ...stories]
        }
        this.currentStoriesSubject$.next(stories)
      })
    )
  }
  getEmptyStorty(): newStory {
    const emptyStory: newStory = {
      txt: '',
      imgUrl: '',
    }
    return emptyStory
  }
  addStory(story: newStory) {
    this.http.post<User>(this.url, story, { withCredentials: true }).pipe(tap((newUser: User) => this.authService.updateUser(newUser))).subscribe()
  }
  addComment(txt:string,storyId:string){
    this.http.post<comentInterface>(this.url+ 'comment',{txt,storyId},{withCredentials:true}).pipe(
      switchMap((comment: comentInterface)=> this.stories$.pipe( map(stories => stories as Story[]), map((stories:Story[] ) => {
        const updatedStories = stories.map(story =>{
          if(storyId=== story._id){
            const comments = [...story.comments , comment]
            return {...story,comments}
          } 
          return story
        })
        this.currentStoriesSubject$.next(updatedStories)
      }))
      )
    ).subscribe()
  }
}
