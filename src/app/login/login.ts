import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  /* loginPage!: FormGroup;
  constructor(private fb:FormBuilder,private rt:Router){}
  ngOnInit(): void {
    this.loginPage =  this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  onSubmit(){
    console.log(this.loginPage.value);  
  } */
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private rt:Router) {

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
  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
this.rt.navigate(['/home']);

  }
}
