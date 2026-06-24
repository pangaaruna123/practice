import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviesignup',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './moviesignup.html',
  styleUrl: './moviesignup.scss',
})
export class Moviesignup {
  signupForm!: FormGroup;
  users: any[]=[];
  constructor(private fb: FormBuilder,private rt:Router) {
    this.signupForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      confirmPassword: [
        '',
        Validators.required
      ]
    },
      {
        validators: this.passwordMatchValidator
      });
  }
  passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const password =
      control.get('password')?.value;
    const confirmPassword =
      control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return {
        passwordMismatch: true
      };
    }
    return null;
  }
  signup() {
    if (this.signupForm.valid) {
      this.users.push(this.signupForm.value);

      localStorage.setItem('users', JSON.stringify(this.users));
    }
    console.log(this.users)
    this.signupForm.reset();
  }
  loginPage(){
    this.rt.navigate(['/movielogin']);
  }
}
