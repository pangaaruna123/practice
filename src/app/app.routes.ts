import { Routes } from '@angular/router';
import { Employeedetails } from './employeedetails/employeedetails';
import { EmployeedetailsForm } from './employeedetailsform/employeedetailsform';

export const routes: Routes = [
    {path:'',component:Employeedetails},
    {path:'employeeform',component:EmployeedetailsForm}
];
