import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { Network } from '../network';

@Component({
  selector: 'app-movielogin',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  templateUrl: './movielogin.html',
  styleUrl: './movielogin.scss',
})
export class Movielogin {
 loginForm!: FormGroup;
  users:any;

  constructor(
    private fb: FormBuilder,
    private rt: Router,
    private ns:Network
  ) {

    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }
  ngOnInit() {
    // let userData=localStorage.getItem('users');

// if(userData){
//   const user = JSON.parse(userData);
//   this.users=user;
//   console.log('User data:', user);
// }
  this.ns.getUsersData().subscribe({
      next: (res) => {
        console.log('users:65', res);
         this.users=res;
      },
      error: (err) => {
        console.error('users not found:', err);
      }
    })
  }
  login() {
    if(this.loginForm.valid){
      const user= this.users.find((u:any)=>u.email===this.loginForm.get('email')?.value && u.password===this.loginForm.get('password')?.value);
      if(user){
        localStorage.setItem('currentUser', JSON.stringify(user.username));
        this.rt.navigate(['/selectmovieseat']);
      }
      else{
        window.alert('Invalid user Details');
      }
    }
  
  
}
}
