import { Component } from '@angular/core';
import { MaterialModule } from '../material/material-module';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConnectableObservable } from 'rxjs';
// function validDateValidator(control: AbstractControl): ValidationErrors | null {

//   const value = control.value;

//   if (!value) {
//     return null;
//   }

//   const pattern =
//     /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/[0-9]{4}$/;

//   if (!pattern.test(value)) {
//     return {
//       pattern: true
//     };
//   }

//   return null;
// }
@Component({
  selector: 'app-employeedetails',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './employeedetails.html',
  styleUrl: './employeedetails.scss',
})
export class Employeedetails {
  employeeForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      birthdate: ['',[Validators.required]],
      collegeStartDate: ['',[Validators.required]],
      collegeEndDate: ['',[Validators.required]],
      workStartDate: ['',[Validators.required]],
      workEndDate: ['',[Validators.required]],
      address: ['',[Validators.required]]
    });
  }
// mmddyyyyValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const value = control.value;

//     console.log('Original value:', value);

//     if (!value) {
//       return null;
//     }

//     let formattedDate = '';

//     // If Angular Material gives us a Date object
//     if (value instanceof Date) {
//       if (isNaN(value.getTime())) {
//         return { pattern: true };
//       }

//       const month = String(value.getMonth() + 1).padStart(2, '0');
//       const day = String(value.getDate()).padStart(2, '0');
//       const year = value.getFullYear();

//       formattedDate = `${month}/${day}/${year}`;
//     }

//     // If value is a string
//     else if (typeof value === 'string') {
//       const trimmedValue = value.trim();

//       // Already in MM/DD/YYYY or M/D/YYYY format
//       const shortDatePattern =
//         /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/\d{4}$/;

//       if (shortDatePattern.test(trimmedValue)) {
//         formattedDate = trimmedValue;
//       } else {
//         // Try converting a full date string to Date
//         const parsedDate = new Date(trimmedValue);

//         if (isNaN(parsedDate.getTime())) {
//           return { pattern: true };
//         }

//         const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
//         const day = String(parsedDate.getDate()).padStart(2, '0');
//         const year = parsedDate.getFullYear();

//         formattedDate = `${month}/${day}/${year}`;
//       }
//     }

//     else {
//       return { pattern: true };
//     }

//     console.log('Formatted date:', formattedDate);

//     // Final MM/DD/YYYY validation
//     const pattern =
//       /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

//     if (!pattern.test(formattedDate)) {
//       return { pattern: true };
//     }

//     return null;
//   };
// }
ngOnInit(){
}
  saveData(){
    console.log(this.employeeForm)
  }
  validateBirthdate(name:any){
    const birthDate = new Date(name.value)
    const futureDate = new Date();
        if(birthDate> futureDate){
      this.employeeForm.get('birthdate')?.setErrors({
        futuredate:true
      })
    }

  }
getErrorMessage(fieldName: string): string {
  const control = this.employeeForm.get(fieldName);
  const value = new Date(control?.value)
  const futureDate= new Date()

  if (!control || !control.errors) {
    return '';
  }

  const errorMessages: any = {
    required: 'This field is required',
    futuredate: ` ${fieldName} can't be future`
  };

  const errorKey = Object.keys(control.errors)[0];
  console.log(value,errorKey,'190000')

  return errorMessages[errorKey] || 'Invalid value';
}
}
