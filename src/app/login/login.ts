import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../material.module';
import { Router } from '@angular/router';
import { Network } from '../network';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm!: FormGroup;
  users:any[]=[];

  constructor(
    private fb: FormBuilder,
    private rt: Router,
    private network: Network,
    private snackBar: MatSnackBar
  ) {

    this.loginForm = this.fb.group({

      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]

    });
  }
  ngOnInit() {
    this.network.getUsers().subscribe({
      next: (res) => {
        this.users = res;
        console.log('users:', res);
      },
      error: (err) => {
        console.error('users not found:', err);
      }
    });
  }
  login() {
    if(this.loginForm.invalid){
      return;
    }
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if (this.users.some(user => user.username === username && user.password === password)) {
      this.rt.navigate(['/home']);
      return;
    }
    else{
      this.snackBar.open('User not found', 'Close', {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['snackbar-error']
      });
    }

  }
}
