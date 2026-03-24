import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin() {
    console.log(this.loginForm.get('password')?.invalid, this.loginForm.value);
  }
}