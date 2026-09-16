import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material-module';
import { User } from '../user';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Popupcomponent } from '../popupcomponent/popupcomponent';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeedetails',
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './employeedetails.html',
  styleUrl: './employeedetails.scss',
})
export class Employeedetails implements OnInit {
  employeeData = new MatTableDataSource<any>([]);
  columns: string[] = ["id", "name", "email", "phoneNumber", "dateOfBirth", "collegeStartDate", "collegeEndDate", "workStartDate", "workEndDate", "address", "actions"]
  constructor(private user: User, private rt: Router, private dialog: MatDialog) { }
  ngOnInit() {
    this.user?.getUsers()?.subscribe(res => {
      // if(res){
      console.log(res, '10333')
      this.employeeData.data = res
      // }
    })
    console.log("dateOfBirth".includes('date'),'666')
  }
  editEmployee() {
    this.rt.navigate(['employeeform'])

  }
  deleteEmployee() {
    this.dialog.open(Popupcomponent, {
      width: '200px',
      height: '200px',

    })
  }
  addEmployee() {
    this.rt.navigate(['employeeform'])
  }
  formateDate(date:any){
    console.log(date,'444')
  }
}
