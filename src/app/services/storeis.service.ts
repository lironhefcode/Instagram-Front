import { Injectable } from '@angular/core';
import { story } from '../moudels/stroyInterface';
import { injectDispatch } from '@reduxjs/angular-redux';
import { load } from '../store/slices/sotries-slice';

@Injectable({
  providedIn: 'root'
})
export class StoreisService {
  stories :story[] = [
      {
        _id: 's101',
        txt: 'Sunset vibes in Santorini 🌅💙 #Paradise #Greece',
        imgUrl: 'https://source.unsplash.com/featured/?santorini,sunset',
        by: {
          _id: 'u101',
          fullname: 'Sophia Carter',
          imgUrl: 'https://source.unsplash.com/featured/?woman,portrait',
        },
        comments: [
          {
            id: 'c1001',
            by: {
              _id: 'u102',
              fullname: 'Jake Thompson',
              imgUrl: 'https://source.unsplash.com/featured/?man,portrait',
            },
            txt: 'That view is insane! 🔥',
            likedBy: [
              {
                _id: 'u103',
                fullname: 'Emma Davis',
                imgUrl: 'https://source.unsplash.com/featured/?woman,face',
              },
            ],
          },
        ],
        likedBy: [
          {
            _id: 'u104',
            fullname: 'Liam Brown',
            imgUrl: 'https://source.unsplash.com/featured/?man,face',
          },
          {
            _id: 'u105',
            fullname: 'Olivia Wilson',
            imgUrl: 'https://source.unsplash.com/featured/?woman,smile',
          },
        ],
  
      },
      {
        _id: 's102',
        txt: 'Morning coffee & city lights ☕🌆 #coffeelover',
        imgUrl: 'https://source.unsplash.com/featured/?coffee,city',
        by: {
          _id: 'u106',
          fullname: 'Daniel Green',
          imgUrl: 'https://source.unsplash.com/featured/?man,beard',
        },
        comments: [
          {
            id: 'c1002',
            by: {
              _id: 'u107',
              fullname: 'Sophia Carter',
              imgUrl: 'https://source.unsplash.com/featured/?woman,portrait',
            },
            likedBy:[],
            txt: 'Nothing beats a morning coffee with a view! ☕✨',
          },
        ],
        likedBy: [
          {
            _id: 'u108',
            fullname: 'Ethan Miller',
            imgUrl: 'https://source.unsplash.com/featured/?man,hipster',
          },
        ],
     
      },
      {
        _id: 's103',
        txt: 'Weekend escape to the mountains 🏔️🌲 #NatureLover',
        imgUrl: 'https://source.unsplash.com/featured/?mountains,hiking',
        by: {
          _id: 'u109',
          fullname: 'Ava Martinez',
          imgUrl: 'https://source.unsplash.com/featured/?woman,hiker',
        },
        comments: [
          {
            id: 'c1003',
            by: {
              _id: 'u110',
              fullname: 'Noah Johnson',
              imgUrl: 'https://source.unsplash.com/featured/?man,outdoors',
            },
            likedBy:[],
            txt: 'Looks like the perfect getaway! 🌿⛰️',
          },
        ],
        likedBy: [
          {
            _id: 'u111',
            fullname: 'Mia Anderson',
            imgUrl: 'https://source.unsplash.com/featured/?woman,nature',
          },
          {
            _id: 'u112',
            fullname: 'Liam Scott',
            imgUrl: 'https://source.unsplash.com/featured/?man,adventure',
          },
        ],
       
      },
    ];
    dispatch = injectDispatch()
    loadStories(){

      this.dispatch(load(this.stories))
    }
  constructor() { }
}
