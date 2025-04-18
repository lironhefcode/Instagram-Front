import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'following-btn',
  imports: [],
  templateUrl: './following-btn.component.html',
  styleUrl: './following-btn.component.scss'
})
export class FollowingBtnComponent {
  @Output() unFollow = new EventEmitter
  onClick(){
    this.unFollow.emit()
  }
}
