import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'follow-btn',
  imports: [],
  templateUrl: './follow-btn.component.html',
  styleUrl: './follow-btn.component.scss'
})
export class FollowBtnComponent {

@Output() follow =new EventEmitter
  click(){
    this.follow.emit()
  }
}
