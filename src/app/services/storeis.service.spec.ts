import { TestBed } from '@angular/core/testing'

import { StoreisService } from './storeis.service'
import { HttpClient } from '@angular/common/http'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { Story } from '../models/stroyInterface'
let mockStories: Story[] = [
  {
    _id: '1',
    imgUrl: 'https://example.com/image1.jpg',
    txt: 'Story 1',
    by: {
      _id: 'user1',
      username: 'user1',

      imgUrl: 'https://example.com/user1.jpg',
    },
    likedBy: [],
    comments: [],
  },
  {
    _id: '2',
    imgUrl: 'https://example.com/image2.jpg',
    txt: 'Story 2',
    by: {
      _id: 'user2',
      username: 'user2',

      imgUrl: 'https://example.com/user2.jpg',
    },
    likedBy: [],
    comments: [],
  },
]
describe('StoreisService', () => {
  let httpClient: HttpClient
  let service: StoreisService
  let httpTesting: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoreisService],
    })
    service = TestBed.inject(StoreisService)
    httpClient = TestBed.inject(HttpClient)
    httpTesting = TestBed.inject(HttpTestingController)
  })
  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('should load stories', () => {
    service.loadStories().subscribe((stories) => {
      expect(stories).toBeTruthy()
    })
    const req = httpTesting.expectOne(service.url)
    expect(req.request.method).toBe('GET')
    req.flush(mockStories)
  })
})
