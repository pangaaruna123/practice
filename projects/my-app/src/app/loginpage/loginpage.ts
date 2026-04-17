import { Component } from '@angular/core';
import { Store } from '../store';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { nextTick } from 'process';

@Component({
  selector: 'app-loginpage',
  imports: [HttpClientModule, CommonModule,MaterialModule,ReactiveFormsModule,FormsModule],
  providers: [Store],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
  standalone: true,
})
export class Loginpage {
  loginForm!:FormGroup;
  users: any[] = [];
constructor(private store: Store,private fb: FormBuilder) {}
ngOnInit() {
  this.loginForm = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  });

  this.store.getUsers().subscribe(users => {
    this.users = users;
    console.log(users,'21232');
  });
  
}
onLogin(){
  this.store.senduserDetails(this.loginForm.value).subscribe({
    next: (response) => {
      console.log('Login successful:', response);
    },
    error: (error) => {
      console.error('Login failed:', error);
      
    },
  
  });
}
}
