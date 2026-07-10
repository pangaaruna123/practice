import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Network } from '../network';

@Component({
  selector: 'app-moviesignup',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './moviesignup.html',
  styleUrl: './moviesignup.scss',
})
export class Moviesignup implements OnInit {
  signupForm!: FormGroup;
  users: any[]=[];
  constructor(private fb: FormBuilder,private rt:Router,private ns:Network) {
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
  ngOnInit(){
    this.ns.getUsersData().subscribe({
      next: (res) => {
        console.log('users:65', res);
        // this.users=res;
      },
      error: (err) => {
        console.error('users not found:', err);
      }
    })
  }
  signup() {
    const payload={
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.confirmPassword
    }
   this.ns.getMovieUsers(payload).subscribe({
     next: (res) => {
        console.log('users:', res);
      },
      error: (err) => {
        console.error('users not found:', err);
      }
   })
    if (this.signupForm.valid) {
      this.users.push(this.signupForm.value);

      // localStorage.setItem('users', JSON.stringify(this.users));
    }
    console.log(this.users)
    this.signupForm.reset();
  }
  loginPage(){
    this.rt.navigate(['/movielogin']);
  }

}
