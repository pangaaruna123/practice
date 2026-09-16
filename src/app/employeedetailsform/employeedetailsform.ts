import { Component } from '@angular/core';
import { MaterialModule } from '../material/material-module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetailsform',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './employeedetailsform.html',
  styleUrl: './employeedetailsform.scss',
})
export class EmployeedetailsForm {
  employeeForm!: FormGroup;
  left = false;
  center = false;
  right = false;

  constructor(private fb: FormBuilder, private user: User,private rt:Router) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dateOfBirth: ['', [Validators.required]],
      collegeStartDate: ['', [Validators.required]],
      collegeEndDate: ['', [Validators.required]],
      workStartDate: ['', [Validators.required]],
      workEndDate: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }
  ngOnInit() {}
  saveData() {
    console.log(this.employeeForm.value, '110')
    const payload = this.employeeForm.value
    this.user.addUser(payload).subscribe({
      next: (res) => {
        console.log(res)
        this.rt.navigate([''])

      },
      error: (err) => {
        throw err
      }
    }
    )
  }
  cancelData() {
    this.employeeForm.reset();
    this.rt.navigate([''])

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
    const dateOfBirth = new Date(this.employeeForm?.get('dateOfBirth')?.value)
    const clgstartControls = this.employeeForm.get('collegeStartDate')
    if (dateOfBirth >= new Date(clgstartControls?.value)) {
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
    const dateOfBirth = new Date(this.employeeForm?.get('dateOfBirth')?.value)
    const startControls = this.employeeForm.get('collegeStartDate')
    const endControls = this.employeeForm?.get('collegeEndDate')
    if (new Date(startControls?.value) <= dateOfBirth) {
      startControls?.setErrors({
        clgsdgreterthenbod: true
      })
    }
    else {
      const errors = { ...startControls?.errors };
      delete errors['clgsdgreterthenbod']
      startControls?.setErrors(
        Object.keys(errors).length ? errors : null
      );
    }

    if (new Date(endControls?.value) <= new Date(startControls?.value)) {
      endControls?.setErrors({
        clgedgreterthenclgsd: true
      })
    }
    else {
      const errors = { ...endControls?.errors };
      delete errors['clgedgreterthenclgsd']
      endControls?.setErrors(
        Object.keys(errors).length ? errors : null
      );
    }
  }
  validateWorkdates() {
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
      const errors = { ...workstartControls?.errors };
      delete errors['wsdgreterthenbod']
      workstartControls?.setErrors(
        Object.keys(errors).length ? errors : null
      );
    }

    if (new Date(workendControls?.value) <= new Date(workstartControls?.value)) {
      workendControls?.setErrors({
        wedgreterthenwsd: true
      })
    }
    else {
      const errors = { ...workendControls?.errors };
      delete errors['wedgreterthenwsd']
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
