import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule, CommonModule,MaterialModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  signupPage!:FormGroup;
  constructor(private fb:FormBuilder) { 
  }
  ngOnInit(){
  this.signupPage=this.fb.group({
    firstname:[''],
    lastname:[''],
    phonenumber:[''],
    email:[''],
    password:[''],
    confirmPassword:['']
  })
  
}
onSignup(){
  console.log(this.signupPage.value);}
}
