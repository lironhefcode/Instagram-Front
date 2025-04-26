import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  authService = inject(AuthService)
  signUpForm = new FormGroup({
    username: new FormControl('',{ nonNullable: true, validators: Validators.required }),
    password: new FormControl('',{ nonNullable: true, validators: Validators.required },),
    fullname: new FormControl('',{ nonNullable: true, validators: Validators.required }),
  })
  onsubmit(){
    if(this.signUpForm.valid){
      this.authService.signup(this.signUpForm.getRawValue())
    }
  }
}
