import { TestBed } from '@angular/core/testing'
import { AuthService } from './auth.service'
import {
  HttpClientTestingModule,
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing'
import { environment } from '../../environments/environment'
import { HttpClient, provideHttpClient } from '@angular/common/http'
import { User } from '../models/userInterface'
const mockUser: User = {
  _id: 'testId',
  username: 'testUser',
  password: 'testPassword',
  fullname: 'testFullname',
  imgUrl: 'test.png',
  stories: [],
  following: [],
  followers: [],
  likedStoryIds: [],
  savedStoryIds: [],
}
describe('AuthService', () => {
  let service: AuthService
  let httpTesting: HttpTestingController
  let httpClient: HttpClient
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    })
    service = TestBed.inject(AuthService)
    httpTesting = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  })

  afterEach(() => {
    httpTesting.verify()
  })
  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('should set user in sessionStorage and navigate to /feed on login', () => {
    const sessionstorgeSpty = spyOn(sessionStorage, 'setItem')
    const routerSpy = spyOn(service.router, 'navigate')
    service.setUser(mockUser)
    expect(sessionstorgeSpty).toHaveBeenCalledWith(
      'user',
      JSON.stringify(mockUser)
    )
    expect(routerSpy).toHaveBeenCalledWith(['/feed'])
  })
})
