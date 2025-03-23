import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imgs = ['home1.png','home2.png','home3.png','home4.png']
  urlIdx = 0
  loginForm =  new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(){
    let i:number = 0
 
    setInterval(()=>{
      i++
      if(i >= this.imgs.length) i= 0
      this.urlIdx = i
 
    },4000)
  }
  onSubmit(){
    console.log(this.loginForm.value)
  }
}
