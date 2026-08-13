import { Component } from '@angular/core';
import { MaterialModule } from '../material/material-module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeedetails',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './employeedetails.html',
  styleUrl: './employeedetails.scss',
})
export class Employeedetails {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      birthDate: ['', [Validators.required]],
      collegeStartDate: ['', [Validators.required]],
      collegeEndDate: ['', [Validators.required]],
      workStartDate: ['', [Validators.required]],
      workEndDate: ['', [Validators.required]],
      address: ['', [Validators.required]]
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
  ngOnInit() {
    // this.employeeForm.valueChanges.subscribe(res => {
    //   console.log(res, '118');
    //   // this.validateWorkdates();
    //   // this.validateclgdates();
    //   // this.checkbod();
    // })
  }
  saveData() {
    console.log(this.employeeForm)
  }
  validatedate(e: any, name: string) {
    const date = new Date(e.value)
    const futureDate = new Date();
    const controls = this.employeeForm?.get(name)
    if (date > futureDate) {
      controls?.setErrors({
        futuredate: true
      })
    }
    else {
      const val = this.employeeForm?.get('collegeStartDate')
      const errors = { ...val?.errors };
      delete errors['futureDate'];
    }

  }
  checkbod() {
    const birthDate = new Date(this.employeeForm?.get('birthDate')?.value)
    const clgstartControls = this.employeeForm.get('collegeStartDate')
    if (birthDate >= new Date(clgstartControls?.value)) {
      clgstartControls?.setErrors({
        clgsdgreterthenbod: true
      })
    }
    else {
      const errors = { ...clgstartControls?.errors };
      delete errors['clgsdgreterthenbod']
      clgstartControls?.setErrors(
        Object.keys(errors).length ? errors : null)
    }
  }
  validateclgdates() {
    const birthDate = new Date(this.employeeForm?.get('birthDate')?.value)
    const startControls = this.employeeForm.get('collegeStartDate')
    const endControls = this.employeeForm?.get('collegeEndDate')
    if (new Date(startControls?.value) <= birthDate) {
      startControls?.setErrors({
        clgsdgreterthenbod: true
      })
    }
    else {
      const errors ={ ...startControls?.errors };
      delete errors['clgsdgreterthenbod']
      startControls?.setErrors(
        Object.keys(errors).length ? errors : null
      );
    }

    if(new Date(endControls?.value)<=new Date(startControls?.value)){
      endControls?.setErrors({
        clgedgreterthenclgsd:true
      })
    }
    else{
       const errors = { ...endControls?.errors };
       delete errors ['clgedgreterthenclgsd']
 endControls?.setErrors(
        Object.keys(errors).length ? errors : null
      );
    }
  }
validateWorkdates(){
   const clgendDate = new Date(this.employeeForm?.get('collegeEndDate')?.value)
    const workstartControls = this.employeeForm.get('workStartDate')
    const workendControls = this.employeeForm?.get('workEndDate')
    if (new Date(workstartControls?.value) <= clgendDate) {
      workstartControls?.setErrors({
        wsdgreterthenbod: true
      })
      workstartControls?.markAsTouched()
    }
    else {
      const errors ={ ...workstartControls?.errors };
      delete errors['wsdgreterthenbod']
      workstartControls?.setErrors(
        Object.keys(errors).length ? errors : null
      );
    }

    if(new Date(workendControls?.value)<=new Date(workstartControls?.value)){
      workendControls?.setErrors({
        wedgreterthenwsd:true
      })
    }
    else{
       const errors = { ...workendControls?.errors };
       delete errors ['wedgreterthenwsd']
 workendControls?.setErrors(
        Object.keys(errors).length ? errors : null
      );
    }
}
  getErrorMessage(fieldName: string): string {
    const control = this.employeeForm.get(fieldName);
    const value = new Date(control?.value)
    if (!control || !control.errors) {
      return '';
    }

    const errorMessages: any = {
      required: 'This field is required',
      futuredate: ` ${fieldName} can't be future`,
      clgsdgreterthenbod: `${fieldName} should be greter then birth Date`,
      clgedgreterthenclgsd: `${fieldName} should be greter then collegeStartDate`,
      wsdgreterthenbod: `${fieldName} should be greter then college end Date`,
      wedgreterthenwsd: `${fieldName} should be greter then workStartDate`,

    };
    const errorKey = Object.keys(control.errors)[0];
    console.log(value, errorKey, '190000')

    return errorMessages[errorKey] || 'Invalid value';
  }
}
