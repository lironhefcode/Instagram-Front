import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imgs = ['home1.png','home2.png','home3.png','home4.png']
  authService = inject(AuthService)
  urlIdx = 0
  loginForm =  new FormGroup({
    username: new FormControl('',{ nonNullable: true, validators: Validators.required }),
    password: new FormControl('',{ nonNullable: true, validators: Validators.required },),
  })
  intrervvalId!:number
  ngOnInit(){
    let i:number = 0
 
    this.intrervvalId = window.setInterval(()=>{
      i++
      if(i >= this.imgs.length) i= 0
      this.urlIdx = i
 
    },4000)
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.getRawValue())
    }
   
  }
  ngOnDestory(){
    clearInterval(this.intrervvalId)
  }
}
