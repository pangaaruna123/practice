import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Network } from '../network';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class SignUp {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder,private network: Network) {
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
const payload={
  username: this.signupForm.get('username')?.value,
  email: this.signupForm.get('email')?.value,
  password: this.signupForm.get('confirmPassword')?.value
}
      console.log(this.signupForm.value);
      this.network.sendUserData(payload).subscribe({
        next: (res) => {
          console.log('Signup successful:', res);
        },
        error: (err) => {
          console.error('Signup failed:', err);
        }
      });

    }

  }

}
