import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPreviewComponent } from './comment-preview.component';
import { comentInterface } from '../../models/comentInerface';

describe('CommentPreviewComponent', () => {
  let component: CommentPreviewComponent;
  let fixture: ComponentFixture<CommentPreviewComponent>;
  let mockComment: comentInterface = { id: '1', txt: 'hello world', by: { _id: '1', username: 'user1', imgUrl: 'user.png' }, likedBy: [] }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentPreviewComponent);
    component = fixture.componentInstance;
    component.comment = mockComment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the comment text', () => {
    
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.txt').textContent).toContain(mockComment.txt);
  });
  it('should display username',() =>{
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.name').textContent).toContain(mockComment.by.username);
  })
  it('should display user image',() =>{ 
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('img').src).toContain(mockComment.by.imgUrl);
  })
  
});
