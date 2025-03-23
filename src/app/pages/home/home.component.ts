import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imgs = ['home1.png','home2.png','home3.png','home4.png']
  urlIdx = 0

  ngOnInit(){
    let i:number = 0
 
    setInterval(()=>{
      i++
      if(i >= this.imgs.length) i= 0
      this.urlIdx = i
 
    },4000)
  }
}
