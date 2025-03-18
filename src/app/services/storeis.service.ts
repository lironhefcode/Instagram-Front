import { Injectable } from '@angular/core';
import { story } from '../moudels/stroyInterface';
import { injectDispatch } from '@reduxjs/angular-redux';
import { load } from '../store/slices/sotries-slice';

@Injectable({
  providedIn: 'root'
})
export class StoreisService {
  stories: story[] = [
    {
      _id: 's101',
      txt: 'Sunset vibes in Santorini 🌅💙 #Paradise #Greece',
      imgUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      by: {
        _id: 'u101',
        fullname: 'Sophia Carter',
        imgUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      },
      comments: [
        {
          id: 'c1001',
          by: {
            _id: 'u102',
            fullname: 'Jake Thompson',
            imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          },
          txt: 'That view is insane! 🔥',
          likedBy: [
            {
              _id: 'u103',
              fullname: 'Emma Davis',
              imgUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
            },
          ],
        },
      ],
      likedBy: [
        {
          _id: 'u104',
          fullname: 'Liam Brown',
          imgUrl: 'https://images.unsplash.com/photo-1603570427993-cc815f95da31',
        },
        {
          _id: 'u105',
          fullname: 'Olivia Wilson',
          imgUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
        },
      ],
    },
    {
      _id: 's102',
      txt: 'Morning coffee & city lights ☕🌆 #coffeelover',
      imgUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348',
      by: {
        _id: 'u106',
        fullname: 'Daniel Green',
        imgUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
      },
      comments: [
        {
          id: 'c1002',
          by: {
            _id: 'u107',
            fullname: 'Sophia Carter',
            imgUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38',
          },
          likedBy: [],
          txt: 'Nothing beats a morning coffee with a view! ☕✨',
        },
      ],
      likedBy: [
        {
          _id: 'u108',
          fullname: 'Ethan Miller',
          imgUrl: 'https://images.unsplash.com/photo-1600195077901-4bbd06d9ab44',
        },
      ],
    },
    {
      _id: 's103',
      txt: 'Weekend escape to the mountains 🏔️🌲 #NatureLover',
      imgUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      by: {
        _id: 'u109',
        fullname: 'Ava Martinez',
        imgUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      },
      comments: [
        {
          id: 'c1003',
          by: {
            _id: 'u110',
            fullname: 'Noah Johnson',
            imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          },
          likedBy: [],
          txt: 'Looks like the perfect getaway! 🌿⛰️',
        },
      ],
      likedBy: [
        {
          _id: 'u111',
          fullname: 'Mia Anderson',
          imgUrl: 'https://images.unsplash.com/photo-1603570427993-cc815f95da31',
        },
        {
          _id: 'u112',
          fullname: 'Liam Scott',
          imgUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38',
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
