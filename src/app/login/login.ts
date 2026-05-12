import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule,FormsModule,MaterialModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
loginPage!: FormGroup;
constructor(private fb:FormBuilder,private rt:Router){}
ngOnInit(): void {
  this.loginPage =  this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  });
}
onSubmit(){
  // this.rt.navigate(['/signup']);
  console.log(this.loginPage.value);  
}
}
