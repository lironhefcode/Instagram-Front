import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsListComponent } from './comments-list.component';
import { comentInterface } from '../../models/comentInerface';
import { Component } from '@angular/core';
@Component({
  selector: 'comment-preview',
  template: '<div></div>'
})class MockCommentPreviewComponent {

}
describe('CommentsListComponent', () => {
  let component: CommentsListComponent;
  let fixture: ComponentFixture<CommentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the same amounts of comments as the input', () => {
    const comments : comentInterface[] = [
      { id:'1',
          txt:'1',
          by:{_id:'1',username:"1",imgUrl:"user.png"},
          likedBy:[]
      } ,
      { id:'2',
        txt:'2',
        by:{_id:'2',username:"2",imgUrl:"user.png"},
        likedBy:[]
    },
      { id:'3',
        txt:'3',
        by:{_id:'3',username:"3",imgUrl:"user.png"},
        likedBy:[]
    },
  ]
    component.comments = comments;
    fixture.detectChanges();
    const commentElements = fixture.nativeElement.querySelectorAll('comment-preview');
    expect(commentElements.length).toBe(comments.length);
    })
  })
