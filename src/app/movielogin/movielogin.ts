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
    private nt:Network
  ) {

    this.loginForm = this.fb.group({
      username: ['',[Validators.required,Validators.minLength(3)]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }
  ngOnInit() {
    let userData=localStorage.getItem('users');

if(userData){
  const user = JSON.parse(userData);
  this.users=user;
  console.log('User data:', user);
}
  }
  login() {
    if(this.loginForm.valid){
      const user= this.users.find((u:any)=>u.username===this.loginForm.get('username')?.value && u.password===this.loginForm.get('password')?.value);
      if(user){
        localStorage.setItem('currentUser', JSON.stringify(this.loginForm.get('username')?.value));
        this.rt.navigate(['/selectmovieseat']);
      }
      else{
        window.alert('Invalid username or password');
      }
    }
  
  
}
}
